import React from 'react';
import { IconsMinds } from '../../../icons';

import { Container, Text } from './styles';
import { colors } from '../../../theme';

import { IProps } from './interfaces';

const Next: React.FC<IProps> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <IconsMinds name="right" color={colors.primaryDefaultdark8} size={24} />
    </Container>
  );
};

export default Next;
