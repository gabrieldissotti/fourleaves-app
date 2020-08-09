import { Platform } from 'react-native';

export const pxOrRem = (px: number): string | number => {
  return Platform.OS === 'web' ? `${String(px / 16)}rem` : `${px}px`;
};

export const hexToRGBA = (hexCode: string, opacity: number): string => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex += hex;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
};
