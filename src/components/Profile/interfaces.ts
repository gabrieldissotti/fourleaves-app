import { GestureResponderEvent } from 'react-native';

export type Props = {
  thumbnail: string;
  name: string;
  link?: string;
  onPress?: (params: GestureResponderEvent) => void;
};
