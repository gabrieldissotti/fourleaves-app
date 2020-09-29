import React from 'react';

import { Container, Text } from './styles';
import { IconsMinds } from '../../../icons';
import { colors } from '../../../theme';

type Props = {
  count: number;
};

const Comments: React.FC<Props> = ({ count }) => {
  return (
    <Container>
      <IconsMinds name="speach-bubble-6" color={colors.blackLight4} size={16} />
      <Text>{count}</Text>
    </Container>
  );
};

export default Comments;
