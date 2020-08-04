import React from 'react';
import { ViewStyle, Text, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../layouts/Header';
import colors from '../theme/colors';

import { SignIn, SignUp } from '../pages';
import { INavigation } from '../interfaces/general';

const Stack = createStackNavigator();

interface IStyle extends ViewStyle {
  borderRadius: number;
  transform: { scale: number }[];
}

interface IProps {
  style: IStyle;
  navigation: INavigation;
}

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
    headerTitle: (props: any) => <Header {...props} navigation={navigation} />,
  };

  return (
    <Animated.View style={[{ flex: 1, overflow: 'hidden' }, style]}>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default Screens;
