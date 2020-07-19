import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import colors from '../theme/colors';
import Header from '../layouts/Header';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primarylight2,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 139
      },
      cardStyle: {
        backgroundColor: colors.white,
      },
      headerTitle: props => <Header {...props} />
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
  </Auth.Navigator>
);

export default AuthRoutes;
