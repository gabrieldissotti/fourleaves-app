import React from 'react';

import { Container, IconsMind } from './styles';

import { IProps } from './interfaces';

const SocialNetwork: React.FC<IProps> = ({ type }) => {
  return (
    <Container>
      <IconsMind icon={type} />
    </Container>
  );
};

export default SocialNetwork;
