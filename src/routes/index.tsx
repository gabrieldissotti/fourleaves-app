import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerContainer from './Drawer';

const Navigation: React.FC = () => (
  <NavigationContainer>
    <DrawerContainer />
  </NavigationContainer>
);

export default Navigation;
