import React from 'react';

import { Container, Text, IconsMind } from './styles';

import { IProps } from './interfaces';

const Next: React.FC<IProps> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <IconsMind icon="right" />
    </Container>
  );
};

export default Next;
