import React from 'react';
import { IconsMinds } from '../../../icons';

import { Container, Text } from './styles';
import { colors } from '../../../theme';

import { IProps } from './interfaces';

const Next: React.FC<IProps> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <IconsMinds name="right" color={colors.primarydark8} size={24} />
    </Container>
  );
};

export default Next;
