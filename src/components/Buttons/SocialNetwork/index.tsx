import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Container, CustomIcons } from './styles';
import { shadows } from '../../../theme';

export type Props = {
  type: 'facebook' | 'instagram';
  onPress(): void;
};

const SocialNetwork: React.FC<Props> = ({ type, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={shadows.ToDown}>
        <CustomIcons icon={type} />
      </Container>
    </TouchableOpacity>
  );
};

export default SocialNetwork;
