import React, { useCallback } from 'react';
import { Alert, Linking, Text } from 'react-native';

import { LinkLib } from './styles';
import { IProps } from './interfaces';

const Link: React.FC<IProps> = ({ to, content, navigation, isToWeb }) => {
  const linkToWeb = useCallback(async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não foi possível abrir a url (não suportada): ${url}`);
    }
  }, []);

  const handleNavigation = () => {
    if (!to) return;

    if (isToWeb) {
      linkToWeb(to);
    } else {
      navigation.navigate(to);
    }
  };

  return (
    <Text>
      <LinkLib onPress={handleNavigation}>{content}</LinkLib>
    </Text>
  );
};

export default Link;
