import { Platform, Dimensions } from 'react-native';
import { ptBR } from 'date-fns/locale';

import packageJson from '../../package.json';

export const isWebPlatform = Platform.OS === 'web';
export const isAndroidPlatform = Platform.OS === 'android';
export const isIOSPlatform = Platform.OS === 'ios';

export const dateFnsOptions = { locale: ptBR };

export const buildVersion = packageJson?.version;
console.log(`APP version: `, buildVersion);

export const isDesktopPlatform =
  isWebPlatform && Dimensions.get('window').width > 1024;
