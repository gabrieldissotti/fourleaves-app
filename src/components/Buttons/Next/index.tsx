import React from 'react';
import { IconsMinds } from '../../../icons';

import { Container, Text } from './styles';
import { colors } from '../../../theme';

import { IProps } from './interfaces';

const Next: React.FC<IProps> = ({ text, navigation, to }) => {
  const handleNavigation = () => navigation.navigate(to);

  return (
    <Container onPress={handleNavigation}>
      <Text>{text}</Text>
      <IconsMinds name="right" color={colors.blackDefault} size={24} />
    </Container>
  );
};

export default Next;
