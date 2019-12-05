import React from 'react';

import { Container } from './styles';

export default function Modal(props) {
  const { visible, card, onBack } = props;

  return (
    <Container visible={visible}>
      <div>
        <h2>A carta escolhida foi</h2>
        <div>
          <img src={card} alt="ima" />
        </div>
        <button type="button" onClick={onBack}>Novo jogo</button>
      </div>
    </Container>
  );
}
