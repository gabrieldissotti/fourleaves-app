import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { updateApp } from './services/expo';

import colors from './theme/colors';

import Routes from './routes';

export default function App() {
  useEffect(() => {
    if (__DEV__) return;

    updateApp();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" />
      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}
