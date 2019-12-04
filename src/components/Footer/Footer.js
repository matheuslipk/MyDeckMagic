import React from 'react';

import {
  Container, Title, Session, Coluna,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <Session>
        <Title>Delivery por cidade</Title>
        <div>
          <Coluna>
            <label>Campo Maior</label>
            <label>Piripiri</label>
            <label>Teresina</label>
          </Coluna>

          <Coluna>
            <label>Altos</label>
            <label>Boqueirão</label>
            <label>Alto Longá</label>
          </Coluna>

          <Coluna>
            <label>Altos</label>
            <label>Boqueirão</label>
            <label>Alto Longá</label>
          </Coluna>
        </div>
      </Session>

      <Session>
        <p>Copyright 2020</p>
      </Session>

    </Container>
  );
}
