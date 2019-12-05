import React from 'react';
import { GiStorkDelivery } from 'react-icons/gi';

import { Container, LinkHeader } from './styles';
import { cores } from '../../constants';

export default function Header() {
  return (
    <Container>
      <LinkHeader to="/">
        <h2>Codeminer 42</h2>
        <GiStorkDelivery size={40} color={cores.textPrimary} />
      </LinkHeader>
    </Container>
  );
}
