import { GestureResponderEvent } from 'react-native';

export interface IProps {
  thumbnail: string;
  name: string;
  navigation: any;
  onPress?: (params: GestureResponderEvent) => void;
}
