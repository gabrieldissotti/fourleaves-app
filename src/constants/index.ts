import { Platform } from 'react-native';

import { ptBR } from 'date-fns/locale';

export const isWebPlatform = Platform.OS === 'web';
export const isAndroidPlatform = Platform.OS === 'android';
export const isIOSPlatform = Platform.OS === 'ios';

export const dateFnsOptions = { locale: ptBR };
