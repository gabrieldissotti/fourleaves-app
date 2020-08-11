import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Container, CustomIcons } from './styles';

import { IProps } from './interfaces';

const SocialNetwork: React.FC<IProps> = ({ type }) => {
  return (
    <TouchableOpacity>
      <Container>
        <CustomIcons icon={type} />
      </Container>
    </TouchableOpacity>
  );
};

export default SocialNetwork;
