import React, { useState } from 'react';
import { Image, Text, View, ViewStyle } from 'react-native';
import Animated, { concat } from 'react-native-reanimated';
import { Container } from './styles';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import Screens from '../Stack';

const Drawer = createDrawerNavigator();

interface IScreenStyles {
  borderRadius: Animated.Node<number> | number;
  transform: { 
    scale?: Animated.Node<number>
  }[];
}

const DrawerContent = ({ navigation, ...rest } : any) => {
  return (
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
  );
};

const DrawerContainer: React.FC = () => {
  const [progress, setProgress] = useState<Animated.Node<number>>(
    new Animated.Value(0)
  );

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const rotate = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -6],
  });


  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 24],
  });

  const screensStyles: IScreenStyles | any = { 
    borderRadius, 
    transform: [
      { scale },
      { rotate: concat(rotate, 'deg') }
    ],
  };

  return (
    <Container style={{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="SignIn"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{ width: '70%', backgroundColor: 'transparent' }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'green',
          inactiveTintColor: 'green',
        }}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={props => {
          setProgress(props.progress);

          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={screensStyles} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </Container>
  );
};

export default DrawerContainer;
