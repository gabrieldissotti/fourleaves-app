import React, { useCallback, useState } from 'react';

import { Container, Box, Text } from './styles';

import { IProps } from './interfaces';

const Item: React.FC<IProps> = ({ text, value, index }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handlePress = useCallback(() => setIsChecked(!isChecked), [isChecked]);

  return (
    <Container isFirst={index === 0} onPress={handlePress}>
      <Box isChecked={isChecked} />
      <Text>{text}</Text>
    </Container>
  );
};

export default Item;
