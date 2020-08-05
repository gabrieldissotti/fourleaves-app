import React, { useState } from 'react';
import Animated, { concat } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Container } from './styles';
import { screensAnimations } from './animations';

import Screens from '../Stack';
import Content from './components/Content';

const Drawer = createDrawerNavigator();

const DrawerContainer: React.FC = () => {
  const [progress, setProgress] = useState<Animated.Node<number>>(
    new Animated.Value(0),
  );

  const animations = screensAnimations(progress);

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

          return <Content {...props} />; {/* eslint-disable-line */}
        }}
      >
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animations} /> /* eslint-disable-line */} 
        </Drawer.Screen>
      </Drawer.Navigator>
    </Container>
  );
};

export default DrawerContainer;
