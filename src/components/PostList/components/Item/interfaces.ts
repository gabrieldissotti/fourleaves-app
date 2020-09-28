import { GestureResponderEvent } from 'react-native';

export interface IProps {
  thumbnail: string;
  text: string;
  statistics?: string;
  date: Date;
  index: number;
  onPress?: (params: GestureResponderEvent) => void;
}

export interface IContainer {
  isFirst: boolean;
  hasThumbnail: boolean;
}
