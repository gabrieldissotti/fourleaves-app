import React from 'react';
import { Text } from 'react-native';

import { LinkLib } from './styles';
import { IProps } from './interfaces';

const Link: React.FC<IProps> = ({
  to,
  content,
  navigation,
  noWhiteSpaceAround,
}) => {
  const handleNavigation = () => navigation.navigate(to);

  return (
    <Text>
      {noWhiteSpaceAround ? '' : ' '}
      <LinkLib onPress={handleNavigation}>{content}</LinkLib>
      {noWhiteSpaceAround ? '' : ' '}
    </Text>
  );
};

export default Link;
