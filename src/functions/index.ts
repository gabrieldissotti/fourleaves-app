import { isWebVersion } from '../constants';

/**
 * convert pixels to rem or px to each different devices
 * @param px pixels in design
 */
export const pixels = (px: number): string | number => {
  return isWebVersion ? `${String(px / 16)}rem` : `${px}px`;
};
