import React, { useState, useCallback, useContext } from 'react';
import { View, Linking, Alert } from 'react-native';

import {
  Container,
  DrawerItem,
  Header,
  Name,
  Photo,
  Frame,
  MenuItem,
  Dash,
  Socials,
} from './styles';

import { AuthContext } from '../../../../context/AuthContext';

import { SocialNetwork } from '../../../../components/Buttons';

import { links } from '../../../../configs';

const Content: React.FC<any> = ({ navigation, ...rest }) => {
  const auth = useContext(AuthContext);

  const [isFocused, setIsFocused] = useState<string>('SignIn');

  const handleNavigate = useCallback(
    (routeName: string) => {
      setIsFocused(routeName);
      navigation.navigate(routeName);
    },
    [navigation],
  );

  const linkToWeb = useCallback(
    async (url: string) => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Não foi possível abrir a url (não suportada): ${url}`);
      }
    },
    [navigation],
  );

  return (
    <Container {...rest}>
      <Header>
        <Frame>
          <Photo
            source={{
              uri: auth?.user?.picture_url,
            }}
          />
        </Frame>

        <Name>{auth?.user?.user_name}</Name>
      </Header>

      <View>
        <MenuItem>
          <DrawerItem
            label="Sorteio no faceook"
            onPress={() => handleNavigate('SignIn')}
          />
          {isFocused === 'SignIn' && <Dash />}
        </MenuItem>
        <MenuItem>
          <DrawerItem
            label="Como funciona"
            onPress={() => handleNavigate('SignUp')}
          />
          {isFocused === 'SignUp' && <Dash />}
        </MenuItem>
        <MenuItem>
          <DrawerItem
            label="Contate-nos"
            onPress={() => handleNavigate('SignUp')}
          />
          {isFocused === 'SignUp' && <Dash />}
        </MenuItem>
        <MenuItem>
          <DrawerItem
            label="Compartilhar"
            onPress={() => handleNavigate('SignUp')}
          />
          {isFocused === 'SignUp' && <Dash />}
        </MenuItem>
        <MenuItem>
          <DrawerItem
            label="Termos e Políticas"
            onPress={() => linkToWeb(links.privacy_policy)}
          />
          {isFocused === 'SignUp' && <Dash />}
        </MenuItem>
        <MenuItem>
          <DrawerItem
            label="Sair"
            onPress={() => handleNavigate('SignIn')}
            isExit
          />
        </MenuItem>
      </View>
      <Socials>
        <SocialNetwork type="facebook" />
        <SocialNetwork type="instagram" />
      </Socials>
    </Container>
  );
};

export default Content;
