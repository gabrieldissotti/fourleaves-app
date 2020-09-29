import { GestureResponderEvent } from 'react-native';

export interface IProps {
  thumbnail: string;
  text: string;
  statistics: {
    likes: number;
    comments: number;
    shares: number;
  };
  date: Date;
  index: number;
  onPress?: (params: GestureResponderEvent) => void;
}

export interface IContainer {
  isFirst: boolean;
  hasThumbnail: boolean;
}
