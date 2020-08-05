import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ViewStyle } from 'react-native';

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
