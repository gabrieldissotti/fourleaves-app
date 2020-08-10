import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
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

import { SocialNetwork } from '../../../../components/Buttons';

const Content: React.FC<any> = ({ navigation, ...rest }) => {
  const [isFocused, setIsFocused] = useState<string>('SignIn');

  const handleNavigate = useCallback((routeName: string) => {
    setIsFocused(routeName);
    navigation.navigate(routeName);
  }, []);

  return (
    <Container {...rest}>
      <Header>
        <Frame>
          <Photo
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/33178519?s=460&u=07dc9223c94ce98f4c64fc397d592ee56b24df11&v=4',
            }}
          />
        </Frame>

        <Name>Jacob Jones</Name>
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
            onPress={() => handleNavigate('SignUp')}
          />
          {isFocused === 'SignUp' && <Dash />}
        </MenuItem>
        <MenuItem>
          <DrawerItem
            label="Sair"
            onPress={() => handleNavigate('SignUp')}
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
