import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { updateApp } from './services/expo';
import Navigation from './routes';
import { Fonts } from './theme';

export default function App() {
  useEffect(() => {
    if (__DEV__) return;

    updateApp();
  }, []);

  return  (
    <Fonts>
      <Navigation />
    </Fonts>
  )
}
