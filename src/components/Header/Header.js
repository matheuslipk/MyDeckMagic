import React from 'react';
import { GiMagickTrick } from 'react-icons/gi';

import { Container, LinkHeader } from './styles';
import { cores } from '../../constants';

export default function Header() {
  return (
    <Container>
      <LinkHeader to="/">
        <h2>Codeminer 42 Test</h2>
        <GiMagickTrick size={40} color={cores.textPrimary} />
      </LinkHeader>
    </Container>
  );
}
