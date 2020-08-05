import Animated, { concat } from 'react-native-reanimated';
import { IScreenStyles } from './interfaces';

export const screensAnimations = (progress: Animated.Node<number>) => {
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  
  const rotate = concat((
    Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [0, -6],
    })
  ),'deg');
  
  
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 24],
  });
  
  
  const screensStyles: IScreenStyles | any = { 
    borderRadius, 
    transform: [
      { scale },
      { rotate }
    ],
  }

  return screensStyles;
}