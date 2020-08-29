import React from 'react';

import { Container, Text } from './styles';
import { IconsMinds } from '../../../icons';
import { colors } from '../../../theme';

const Comments: React.FC = () => {
  return (
    <Container>
      <IconsMinds name="speach-bubble-6" color={colors.blackLight4} size={16} />
      <Text>2k</Text>
    </Container>
  );
};

export default Comments;
