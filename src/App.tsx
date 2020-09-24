import 'react-native-gesture-handler';
import 'url-search-params-polyfill';

import React, { useEffect } from 'react';
import ExpoAPI from './apis/Expo';
import Navigation from './routes';
import { Fonts } from './theme';

export default function App() {
  useEffect(() => {
    if (__DEV__) return;

    ExpoAPI.updateApp();
  }, []);

  return (
    <Fonts>
      <Navigation />
    </Fonts>
  );
}
