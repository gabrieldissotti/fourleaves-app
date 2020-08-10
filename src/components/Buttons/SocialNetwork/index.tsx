import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Container, IconsMind } from './styles';

import { IProps } from './interfaces';

const SocialNetwork: React.FC<IProps> = ({ type }) => {
  return (
    <TouchableOpacity>
      <Container>
        <IconsMind icon={type} />
      </Container>
    </TouchableOpacity>
  );
};

export default SocialNetwork;
