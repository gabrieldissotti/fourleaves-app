import React from 'react';
import { Image, Text, View } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Container } from './styles';

const Content: React.FC<any> = ({ navigation, ...rest }) => (
  <DrawerContentScrollView {...rest}>
    <Container>
      <View>
        <Image
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/33178519?s=460&u=07dc9223c94ce98f4c64fc397d592ee56b24df11&v=4',
            height: 60,
            width: 60,
          }}
          resizeMode="center"
          style={{ borderRadius: 30 }}
        />

        <Text>Jacob Jones</Text>
      </View>

      <View>
        <DrawerItem
          label="Sorteio no faceook"
          to="SignIn"
          onPress={() => navigation.navigate('SignIn')}
          // icon={() => <AntDesign name="SignIn" size={16} />}
        />

        <DrawerItem
          label="Como funciona"
          to="SignIn"
          onPress={() => navigation.navigate('SignUp')}
        />

        <DrawerItem
          label="Contate-nos"
          to="SignIn"
          onPress={() => navigation.navigate('SignUp')}
        />

        <DrawerItem
          label="Compartilhar"
          to="SignIn"
          onPress={() => navigation.navigate('SignUp')}
        />

        <DrawerItem
          label="Termos e Políticas"
          to="SignIn"
          onPress={() => navigation.navigate('SignUp')}
        />

        <DrawerItem
          label="Sair"
          to="SignIn"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </Container>
  </DrawerContentScrollView>
);

export default Content;
