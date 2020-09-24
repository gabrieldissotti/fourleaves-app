import { Platform } from 'react-native';

/**
 * convert pixels to rem or px to each different devices
 * @param px pixels in design
 */
export const pixels = (px: number): string | number => {
  return Platform.OS === 'web' ? `${String(px / 16)}rem` : `${px}px`;
};
