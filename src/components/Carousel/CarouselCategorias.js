import React, { useState, useEffect } from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

import pizza from '../../assets/categorias/pizza.webp';
import { Container } from './styles';
import { cores } from '../../constants';

export default function Carousel() {
  const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [deslocamento, setDeslocamento] = useState(0);
  const [tamanhoLista, setTamanhoLista] = useState(600);
  const tamanhoDeslocamento = 240;


  useEffect(() => {
    setTamanhoLista(document.getElementById('listaCategorias').offsetWidth);
  }, []);

  function deslocarEsquerda() {
    if (deslocamento > (tamanhoLista / 3)) {
      setDeslocamento(tamanhoLista / 3);
    } else {
      setDeslocamento(deslocamento + tamanhoDeslocamento);
    }
  }

  function deslocarDireita() {
    if (deslocamento < (-tamanhoLista / 3)) {
      setDeslocamento(-tamanhoLista / 3);
    } else {
      setDeslocamento(deslocamento - tamanhoDeslocamento);
    }
  }

  return (
    <Container>
      <button
        type="button"
        className="arrow-left"
        onClick={deslocarEsquerda}
      >
        <FaRegArrowAltCircleLeft size={40} color={cores.primaria} />
      </button>
      <button
        type="button"
        className="arrow-right"
        onClick={deslocarDireita}
      >
        <FaRegArrowAltCircleRight size={40} color={cores.primaria} />
      </button>
      <ul id="listaCategorias" style={{ transform: `translateX(${deslocamento}px)` }}>
        {
          lista.map((item) => (
            <li key={item}>
              <div style={{ background: `url(${pizza})`, backgroundSize: 'cover' }} />
              <label>Label do item</label>
            </li>
          ))
        }
      </ul>

    </Container>
  );
}
