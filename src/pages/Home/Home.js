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
import Modal from '../../components/Modal/Modal';
import * as functions from './functions';

export default function Home() {
  const deck = useSelector((state) => state.deck);
  const cards = useSelector((state) => state.card);
  const [etapa, setEtapa] = useState(0);
  const [pilha1, setpilha1] = useState([]);
  const [pilha2, setpilha2] = useState([]);
  const [pilha3, setpilha3] = useState([]);
  const [started, setStarted] = useState(true);
  const [modalVisible, setModalVisible] = useState(true);
  const [pilhaSelecionada, setPilhaSelecionada] = useState(0);
  const dispatch = useDispatch();

  async function newGame(deckId) {
    const response = await api.get(`/deck/${deckId}/draw/?count=21`);
    setModalVisible(false);
    setStarted(true);
    setEtapa(1);
    dispatch(cardActions.addCards(response.data.cards));
  }

  function next() {
    if (pilhaSelecionada === 0) {
      alert('Selecione em qual pilha sua carta está');
      return;
    }


    setPilhaSelecionada(0);
    functions.animation();

    const timer = etapa > 2 ? 0 : 1000;

    setTimeout(() => {
      if (pilhaSelecionada === 1) {
        dispatch(cardActions.addCards([...pilha3, ...pilha1, ...pilha2]));
      }
      if (pilhaSelecionada === 2) {
        dispatch(cardActions.addCards([...pilha3, ...pilha2, ...pilha1]));
      }
      if (pilhaSelecionada === 3) {
        dispatch(cardActions.addCards([...pilha2, ...pilha3, ...pilha1]));
      }
    }, timer);

    if (etapa >= 3) {
      setModalVisible(true);
      setStarted(false);
      setEtapa(0);
      return;
    }

    setEtapa(etapa + 1);
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

      {
        cards[10] && (
          <Modal
            visible={modalVisible}
            card={cards[10].image}
            onBack={() => newGame(deck.deck_id)}
          />
        )
      }

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
          <Pilha
            onClick={() => setPilhaSelecionada(1)}
            id="pilha1"
            selecionada={pilhaSelecionada === 1}
          >
            <HeaderPilha>1</HeaderPilha>
            <div>
              {
                pilha1.map((card) => (
                  <Carta key={card.code} className="card">
                    <img src={card.image} alt={card.code} />
                  </Carta>
                ))
              }
            </div>
          </Pilha>

          <Pilha
            onClick={() => setPilhaSelecionada(2)}
            id="pilha2"
            selecionada={pilhaSelecionada === 2}
          >
            <HeaderPilha>2</HeaderPilha>
            <div>
              {
                pilha2.map((card) => (
                  <Carta key={card.code} className="card">
                    <img src={card.image} alt={card.code} />
                  </Carta>
                ))
              }
            </div>
          </Pilha>

          <Pilha
            onClick={() => setPilhaSelecionada(3)}
            id="pilha3"
            selecionada={pilhaSelecionada === 3}
          >
            <HeaderPilha>3</HeaderPilha>
            <div>
              {
                pilha3.map((card) => (
                  <Carta key={card.code} className="card">
                    <img src={card.image} alt={card.code} />
                  </Carta>
                ))
              }
            </div>
          </Pilha>
        </GameArea>
      </Container>
    </Content>
  );
}
