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
  const [started, setStarted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [pilhaSelecionada, setPilhaSelecionada] = useState(0);
  const dispatch = useDispatch();

  function reiniciarVariaveis() {
    setModalVisible(false);
    setStarted(true);
    setEtapa(1);
  }

  function shuffleCards(pilha) {
    if (pilha === 1) {
      dispatch(cardActions.addCards([...pilha3, ...pilha1, ...pilha2]));
    }
    if (pilha === 2) {
      dispatch(cardActions.addCards([...pilha3, ...pilha2, ...pilha1]));
    }
    if (pilha === 3) {
      dispatch(cardActions.addCards([...pilha2, ...pilha3, ...pilha1]));
    }
  }

  async function newGame(deckId) {
    if (cards.length !== 21) {
      const response = await api.get(`/deck/${deckId}/draw/?count=21`);
      await dispatch(cardActions.addCards(response.data.cards));
    } else {
      shuffleCards(1);
    }
    reiniciarVariaveis();
  }

  function next(pilha) {
    setPilhaSelecionada(0);

    setTimeout(() => {
      shuffleCards(pilha);
    }, 1000);

    if (etapa >= 3) {
      functions.juntaESepara(pilha);
      setTimeout(() => {
        setModalVisible(true);
        setStarted(false);
        setEtapa(0);
      }, 1000);
    } else {
      functions.juntaESepara(pilha);
      setEtapa(etapa + 1);
    }
  }

  function selecionarPilha(value) {
    setPilhaSelecionada(value);
    next(value);
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
        <OptionsGame visible>
          <MyButton onClick={() => newGame(deck.deck_id)}>
            Novo Jogo
          </MyButton>
        </OptionsGame>

        <GameArea visible={started}>
          <Pilha
            onClick={() => selecionarPilha(1)}
            id="pilha1"
            selecionada={pilhaSelecionada === 1}
          >
            <HeaderPilha className="headerPilha">1</HeaderPilha>
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
            onClick={() => selecionarPilha(2)}
            id="pilha2"
            selecionada={pilhaSelecionada === 2}
          >
            <HeaderPilha className="headerPilha">2</HeaderPilha>
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
            onClick={() => selecionarPilha(3)}
            id="pilha3"
            selecionada={pilhaSelecionada === 3}
          >
            <HeaderPilha className="headerPilha">3</HeaderPilha>
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
