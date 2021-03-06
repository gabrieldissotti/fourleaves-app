import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Container, Background } from './styles';
import { screensAnimations } from './animations';

import Screens from '../Stack';
import Content from './components/Content';
import { AuthProvider } from '../../context/AuthContext';

const Drawer = createDrawerNavigator();

const DrawerContainer: React.FC = () => {
  const [progress, setProgress] = useState<Animated.Node<number>>(
    new Animated.Value(0),
  );

  const animations = screensAnimations(progress);

  return (
    <Background>
      <Container style={{ flex: 1 }}>
        <AuthProvider>
          <Drawer.Navigator
            initialRouteName="Pages"
            drawerType="slide"
            overlayColor="transparent"
            drawerStyle={{ width: '70%', backgroundColor: 'transparent' }}
            drawerContentOptions={{
              activeBackgroundColor: 'transparent',
            }}
            sceneContainerStyle={{
              backgroundColor: 'transparent',
            }}
            drawerContent={props => {
              setProgress(props.progress);

              return <Content {...props} />;
            }}
          >
            <Drawer.Screen
              name="Screens"
              options={{
                header: () => <></>,
              }}
            >
              {props => <Screens {...props} style={animations} />}
            </Drawer.Screen>
          </Drawer.Navigator>
        </AuthProvider>
      </Container>
    </Background>
  );
};

export default DrawerContainer;
