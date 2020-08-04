import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { updateApp } from './services/expo';
import Navigation from './routes';

export default function App() {
  useEffect(() => {
    if (__DEV__) return;

    updateApp();
  }, []);

  return <Navigation />;
}
