import React from 'react';

import { Container, Text } from './styles';
import { IconsMinds } from '../../../icons';
import { colors } from '../../../theme';

const Like: React.FC = () => {
  return (
    <Container>
      <IconsMinds name="like" color={colors.primarydark8} size={16} />
      <Text>28mi</Text>
    </Container>
  );
};

export default Like;
