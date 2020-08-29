import React from 'react';

import { Container, Text } from './styles';
import { IconsMinds } from '../../../icons';
import { colors } from '../../../theme';

const Likes: React.FC = () => {
  return (
    <Container>
      <IconsMinds name="like" color={colors.blackLight4} size={16} />
      <Text>28mi</Text>
    </Container>
  );
};

export default Likes;
