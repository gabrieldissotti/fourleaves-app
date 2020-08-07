import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface INavigation extends DrawerNavigationProp<any, any> {
  openDrawer: () => void;
  closeDrawer: () => void;
}

interface IStyle extends ViewStyle {
  borderRadius: number;
  transform: { scale: number }[];
}

export interface IProps {
  style: IStyle;
  navigation: INavigation;
}

export interface IStackNavigator {
  headerLeft: ReactNode | null | undefined;
}
