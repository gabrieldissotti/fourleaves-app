import { Platform } from 'react-native';
import colors from './colors';
import { pixels } from '../functions';

export const Default = {
  ...(Platform.OS === 'ios' && {
    shadowColor: colors.blackDefault,
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 1.0,
  }),
  ...(Platform.OS === 'android' && {
    elevation: 2,
  }),
  ...(Platform.OS === 'web' && {
    boxShadow: `0px 0px ${pixels(4)} ${colors.blackDefaultAlpha14}`,
  }),
};

export const ToDown = {
  ...(Platform.OS === 'ios' && {
    shadowColor: colors.blackDefault,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  }),
  ...(Platform.OS === 'android' && {
    elevation: 4,
  }),
  ...(Platform.OS === 'web' && {
    boxShadow: `0px ${pixels(3)} ${pixels(8)} ${colors.blackDefaultAlpha14}`,
  }),
};
