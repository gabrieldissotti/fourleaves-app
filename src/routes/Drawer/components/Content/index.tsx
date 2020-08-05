import React from 'react';
import { Image, Text, View } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Container } from './styles';

const Content: React.FC<any> = ({ navigation, ...rest }) => (
  <DrawerContentScrollView {...rest}>
    <Container>
      <View>
        <Image
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/33178519?s=460&u=07dc9223c94ce98f4c64fc397d592ee56b24df11&v=4',
            height: 45,
            width: 45,
          }}
          resizeMode="center"
          style={{ borderRadius: 30 }}
        />

        <Text>
          Gabriel Dissotti
        </Text>
        <Text>Back-end Developer</Text>
      </View>

      <View>
        <DrawerItem
          label="SignIn"
          onPress={() => navigation.navigate('SignIn')}
          labelStyle={{ marginLeft: -16 }}
          // icon={() => <AntDesign name="SignIn" size={16} />}
        />

        <DrawerItem
          label="SignUp"
          onPress={() => navigation.navigate('SignUp')}
          labelStyle={{ marginLeft: -16 }}
          // icon={() => <AntDesign name="message1" size={16} />}
        />
      </View>
    </Container>
  </DrawerContentScrollView>
)

export default Content;