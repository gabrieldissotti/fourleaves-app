import React from 'react';

import { Container, Text } from './styles';
import { IconsMinds } from '../../../icons';
import { colors } from '../../../theme';

type Props = {
  count: number;
};

const Likes: React.FC<Props> = ({ count }) => {
  return (
    <Container>
      <IconsMinds name="like" color={colors.blackLight4} size={16} />
      <Text>{count}</Text>
    </Container>
  );
};

export default Likes;
