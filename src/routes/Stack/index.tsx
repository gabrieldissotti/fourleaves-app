import React from 'react';
import Animated from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../layouts/Header';
import colors from '../../theme/colors';

import { SignIn, SignUp } from '../../pages';
import { IProps } from './interfaces';

import { Shadow } from './styles';

const Stack = createStackNavigator();

const Screens: React.FC<IProps> = ({ navigation, style }) => {
  const options = {
    headerStyle: {
      backgroundColor: colors.primarylight2,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      height: 139,
    },
    cardStyle: {
      backgroundColor: colors.white,
    },
    headerTitle: (props: any) => <Header {...props} navigation={navigation} />, //eslint-disable-line
  };

  return (
    <>
      <Shadow style={[{ flex: 1, overflow: 'hidden' }, style]} />
      <Animated.View style={[{ flex: 1, overflow: 'hidden' }, style]}>
        <Stack.Navigator screenOptions={options}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </Animated.View>
    </>
  );
};

export default Screens;
