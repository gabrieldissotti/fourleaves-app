import { GestureResponderEvent } from 'react-native';

export interface IProps {
  value: string;
  text: string;
  index: number;
  isChecked: boolean;
  onPress?: (params: GestureResponderEvent) => void;
}

export interface IContainer {
  isFirst: boolean;
}
