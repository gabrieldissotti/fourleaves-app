import React from 'react';

import { Container, Text, IconsMind } from './styles';

import { IProps } from './interfaces';

const Previous: React.FC<IProps> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen || false}>
      {isOpen && (
        <>
          <IconsMind icon="left" />
          <Text>voltar</Text>
        </>
      )}
    </Container>
  );
};

export default Previous;
