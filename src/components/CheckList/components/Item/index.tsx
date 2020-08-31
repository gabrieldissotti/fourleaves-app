import React from 'react';

import { Container, Box, Text } from './styles';

import { IProps } from './interfaces';

const Item: React.FC<IProps> = ({ text, value, index, isChecked, onPress }) => {
  return (
    <Container isFirst={index === 0} onPress={onPress}>
      <Box isChecked={isChecked} />
      <Text>{text}</Text>
    </Container>
  );
};

export default Item;
