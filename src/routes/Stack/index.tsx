import React from 'react';
import Animated from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import Header from './components/Header';
import colors from '../../theme/colors';

import { SignIn, Pages, Posts, Requirements, Awarded } from '../../pages';
import { IProps } from './interfaces';

import { Shadow } from './styles';

const Stack = createStackNavigator();

const Screens: React.FC<IProps> = ({ navigation, style }) => {
  const isDrawerOpen = useIsDrawerOpen();

  return (
    <>
      <Shadow style={[{ flex: 1, overflow: 'hidden' }, style]} />
      <Animated.View style={[{ flex: 1, overflow: 'hidden' }, style]}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primaryLight2,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              height: 139,
            },
            cardStyle: {
              backgroundColor: colors.whiteDefault,
              borderBottomLeftRadius: isDrawerOpen ? 24 : 0,
            },
            headerLeft: () => null,
            headerTitle: (props: any) => (
              <Header {...props} navigation={navigation} />
            ), //eslint-disable-line
          }}
        >
          <Stack.Screen name="Awarded" component={Awarded} />
          <Stack.Screen name="Requirements" component={Requirements} />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="Pages" component={Pages} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </Animated.View>
    </>
  );
};

export default Screens;
