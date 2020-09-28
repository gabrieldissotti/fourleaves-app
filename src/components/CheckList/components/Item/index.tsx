import React, { useCallback, useContext, useState } from 'react';

import { Container, Box, Text } from './styles';

import { IProps } from './interfaces';
import { RaffleContext } from '../../../../context/RaffleContext';

const Item: React.FC<IProps> = ({ text, value, index }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const raffle = useContext(RaffleContext);

  const handlePress = useCallback(() => {
    setIsChecked(!isChecked);

    raffle.toggleCheckedRequirement(value);
  }, [isChecked, raffle, value]);

  return (
    <Container isFirst={index === 0} onPress={handlePress}>
      <Box isChecked={isChecked} />
      <Text>{text}</Text>
    </Container>
  );
};

export default Item;
