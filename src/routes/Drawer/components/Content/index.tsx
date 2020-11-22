import React, { useState, useCallback, useContext } from 'react';
import { View, Linking, Alert, Share } from 'react-native';

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

import { links, share_app } from '../../../../configs';
import { isWebPlatform } from '../../../../constants';

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

  const linkToWeb = useCallback(async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não foi possível abrir a url (não suportada): ${url}`);
    }
  }, []);

  const shareApp = useCallback(async () => {
    try {
      await Share.share({
        message: share_app.message,
        title: share_app.title,
        url: share_app.url,
      });
    } catch (error) {
      Alert.alert(`Não foi possível compartilhar`);
    }
  }, []);

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
            onPress={() => linkToWeb(links.how_it_works)}
          />
          {isFocused === 'SignUp' && <Dash />}
        </MenuItem>
        <MenuItem>
          <DrawerItem
            label="Contate-nos"
            onPress={() => linkToWeb(`mailto:${links.contact_email}`)}
          />
          {isFocused === 'SignUp' && <Dash />}
        </MenuItem>
        {!isWebPlatform && (
          <MenuItem>
            <DrawerItem label="Compartilhar" onPress={() => shareApp()} />
            {isFocused === 'SignUp' && <Dash />}
          </MenuItem>
        )}
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
