import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Container, CustomIcons } from './styles';
import { shadows } from '../../../theme';

import { IProps } from './interfaces';

const SocialNetwork: React.FC<IProps> = ({ type }) => {
  return (
    <TouchableOpacity>
      <Container style={shadows.ToDown}>
        <CustomIcons icon={type} />
      </Container>
    </TouchableOpacity>
  );
};

export default SocialNetwork;
