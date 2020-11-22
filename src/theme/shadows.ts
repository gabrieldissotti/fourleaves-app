import colors from './colors';
import { pixels } from '../functions';
import { isAndroidPlatform, isIOSPlatform, isWebPlatform } from '../constants';

export const Default = {
  ...(isIOSPlatform && {
    shadowColor: colors.blackDefault,
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 1.0,
  }),
  ...(isAndroidPlatform && {
    elevation: 2,
  }),
  ...(isWebPlatform && {
    boxShadow: `0px 0px ${pixels(4)} ${colors.blackDark1Alpha12}`,
  }),
};

export const ToDown = {
  ...(isIOSPlatform && {
    shadowColor: colors.blackDefault,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  }),
  ...(isAndroidPlatform && {
    elevation: 4,
  }),
  ...(isWebPlatform && {
    boxShadow: `0px ${pixels(3)} ${pixels(8)} ${colors.blackDark1Alpha12}`,
  }),
};
