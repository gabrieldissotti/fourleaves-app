import colors from './colors';
import { pixels } from '../functions';
import { isAndroidVersion, isIOSVersion, isWebVersion } from '../constants';

export const Default = {
  ...(isIOSVersion && {
    shadowColor: colors.blackDefault,
    shadowOffset: {
      width: -2,
      height: -2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 1.0,
  }),
  ...(isAndroidVersion && {
    elevation: 2,
  }),
  ...(isWebVersion && {
    boxShadow: `0px 0px ${pixels(4)} ${colors.blackDark1Alpha12}`,
  }),
};

export const ToDown = {
  ...(isIOSVersion && {
    shadowColor: colors.blackDefault,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  }),
  ...(isAndroidVersion && {
    elevation: 4,
  }),
  ...(isWebVersion && {
    boxShadow: `0px ${pixels(3)} ${pixels(8)} ${colors.blackDark1Alpha12}`,
  }),
};
