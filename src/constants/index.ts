import { Platform } from 'react-native';

export const isWebPlatform = Platform.OS === 'web';
export const isAndroidPlatform = Platform.OS === 'android';
export const isIOSPlatform = Platform.OS === 'ios';
