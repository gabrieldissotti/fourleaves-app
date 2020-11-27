import React, { useState, useCallback, useContext } from 'react';
import {
  View,
  Linking,
  Alert,
  Share,
  TouchableWithoutFeedback,
} from 'react-native';

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
  BuildVersion,
  CustomSimpleLineIcon,
} from './styles';

import { AuthContext } from '../../../../context/AuthContext';

import { SocialNetwork } from '../../../../components/Buttons';

import { links, share_app } from '../../../../configs';
import { buildVersion, isWebPlatform } from '../../../../constants';
import { colors } from '../../../../theme';

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
    if (isWebPlatform && !url.includes('mailto:')) {
      window.open(url, '_blank');

      return;
    }

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

  const handleSignOut = useCallback(async () => {
    auth.handleSignOut();

    handleNavigate('SignIn');
  }, [handleNavigate, auth]);

  return (
    <Container {...rest}>
      <TouchableWithoutFeedback onPress={() => handleNavigate('SignIn')}>
        <Header>
          <Frame>
            {auth?.user?.picture_url ? (
              <Photo
                source={{
                  uri: auth?.user?.picture_url,
                }}
              />
            ) : (
              <CustomSimpleLineIcon
                name="user"
                color={colors.whiteDefault}
                size={32}
              />
            )}
          </Frame>

          <Name>{auth?.user?.user_name || 'Anônimo'}</Name>
        </Header>
      </TouchableWithoutFeedback>

      <View>
        <MenuItem>
          <DrawerItem
            label="Sorteio no faceook"
            onPress={() => handleNavigate(auth?.user ? 'Pages' : 'SignIn')}
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
            onPress={() => {
              linkToWeb(`mailto:${links.contact_email}`);
              handleNavigate('Contact');
            }}
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

        {auth?.user && (
          <MenuItem>
            <DrawerItem label="Sair" onPress={handleSignOut} isExit />
          </MenuItem>
        )}
      </View>
      <Socials>
        <SocialNetwork
          type="facebook"
          onPress={() => linkToWeb(links.facebook_page)}
        />

        <SocialNetwork
          type="instagram"
          onPress={() => linkToWeb(links.instagram_page)}
        />
      </Socials>

      <BuildVersion>{`v${buildVersion}`}</BuildVersion>
    </Container>
  );
};

export default Content;
