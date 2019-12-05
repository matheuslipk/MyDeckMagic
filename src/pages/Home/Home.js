import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as deckActions from '../../store/actions/deckAction';
import * as cardActions from '../../store/actions/cardActions';
import api from '../../services/api';
import { Content } from '../../styles/myComponents';
import {
  Container, Carta, Pilha, HeaderPilha, MyButton, OptionsGame, GameArea,
} from './styles';
import { cores } from '../../constants';

export default function Home() {
  const deck = useSelector((state) => state.deck);
  const cards = useSelector((state) => state.card);
  const [pilha1, setpilha1] = useState([]);
  const [pilha2, setpilha2] = useState([]);
  const [pilha3, setpilha3] = useState([]);
  const [started, setStarted] = useState(false);
  const [pilhaSelecionada, setPilhaSelecionada] = useState(0);
  const dispatch = useDispatch();

  async function newGame(deckId) {
    const response = await api.get(`/deck/${deckId}/draw/?count=21`);
    setStarted(true);
    dispatch(cardActions.addCards(response.data.cards));
  }

  function next() {
    if (pilhaSelecionada === 0) {
      setPilhaSelecionada(0);
      alert('Selecione em qual pilha sua carta está');
      return;
    }
    if (pilhaSelecionada === 1) {
      dispatch(cardActions.addCards([...pilha3, ...pilha1, ...pilha2]));
    }
    if (pilhaSelecionada === 2) {
      dispatch(cardActions.addCards([...pilha3, ...pilha2, ...pilha1]));
    }
    if (pilhaSelecionada === 3) {
      dispatch(cardActions.addCards([...pilha2, ...pilha3, ...pilha1]));
    }
  }

  useEffect(() => {
    api.get('/deck/new/shuffle/?deck_count=1').then((response) => {
      dispatch(deckActions.createDeck(response.data));
    });
  }, [dispatch]);

  useEffect(() => {
    const p1 = [];
    const p2 = [];
    const p3 = [];

    for (let i = 0; i < cards.length - 2; i += 3) {
      p1.push(cards[i]);
      p2.push(cards[i + 1]);
      p3.push(cards[i + 2]);
    }

    setpilha1(p1);
    setpilha2(p2);
    setpilha3(p3);
  }, [cards]);

  return (
    <Content>
      <Container color={cores.background}>
        <OptionsGame>
          <MyButton onClick={() => newGame(deck.deck_id)}>
            Novo Jogo
          </MyButton>
          <MyButton onClick={next}>
            Próxima etapa
          </MyButton>
        </OptionsGame>

        <GameArea visible={started}>
          <Pilha onClick={() => setPilhaSelecionada(1)} id="pilha1">
            <HeaderPilha>1</HeaderPilha>
            {
              pilha1.map((card) => (
                <Carta key={card.code} className="card">
                  <img src={card.image} alt={card.code} />
                </Carta>
              ))
            }
          </Pilha>

          <Pilha onClick={() => setPilhaSelecionada(2)} id="pilha2">
            <HeaderPilha>2</HeaderPilha>
            {
              pilha2.map((card) => (
                <Carta key={card.code} className="card">
                  <img src={card.image} alt={card.code} />
                </Carta>
              ))
            }
          </Pilha>

          <Pilha onClick={() => setPilhaSelecionada(3)} id="pilha3">
            <HeaderPilha>3</HeaderPilha>
            {
              pilha3.map((card) => (
                <Carta key={card.code} className="card">
                  <img src={card.image} alt={card.code} />
                </Carta>
              ))
            }
          </Pilha>
        </GameArea>
      </Container>
    </Content>
  );
}
