import { isWebPlatform } from '../constants';

/**
 * convert pixels to rem or px to each different devices
 * @param px pixels in design
 */
export const pixels = (px: number): string | number => {
  return isWebPlatform ? `${String(px / 16)}rem` : `${px}px`;
};
