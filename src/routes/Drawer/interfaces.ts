import Animated from 'react-native-reanimated';

export interface IScreenStyles {
  borderRadius: Animated.Node<number> | number;
  transform: {
    scale?: Animated.Node<number>;
  }[];
}
