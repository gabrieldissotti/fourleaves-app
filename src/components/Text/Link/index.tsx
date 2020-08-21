import React from 'react';
import { Text } from 'react-native';

import { LinkLib } from './styles';
import { IProps } from './interfaces';

const Link: React.FC<IProps> = ({ to, content, navigation }) => {
  const handleNavigation = () => navigation.navigate(to);

  return (
    <Text>
      &nbsp;
      <LinkLib onPress={handleNavigation}>{content}</LinkLib>
      &nbsp;
    </Text>
  );
};

export default Link;
