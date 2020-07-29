import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Header from '../layouts/Header';
import colors from '../theme/colors';

import SignIn from '../pages/SignIn';

const Drawer = createDrawerNavigator();
const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primarylight2,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 139,
      },
      cardStyle: {
        backgroundColor: colors.white,
      },
      headerTitle: props => <Header {...props} />, // eslint-disable-line
    }}
    initialRouteName='SignIn'
  >
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

const DrawerRoutes: React.FC = () => (
  <Drawer.Navigator initialRouteName="AuthRoutes">
    <Drawer.Screen name="AuthRoutes" component={AuthRoutes} />
  </Drawer.Navigator>
);

export default DrawerRoutes;
