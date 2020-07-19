import React from 'react';

import { Container, Icon, Title, Description } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Icon />
      <Title>fourleav.es</Title>
      <Description>uma nova experiência em sortear</Description>
    </Container>
  );
};

export default Header;
