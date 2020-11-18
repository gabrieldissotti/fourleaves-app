import { Platform } from 'react-native';

export const isWebVersion = Platform.OS === 'web';
export const isAndroidVersion = Platform.OS === 'android';
export const isIOSVersion = Platform.OS === 'ios';
