import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { updateApp } from './src/services/expo';

export default function App() {
  useEffect(() => {
    if (__DEV__) return;

    updateApp()
  }, [])

  return (
    <View style={styles.container}>
      <Text>alguma coisa maneira!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
