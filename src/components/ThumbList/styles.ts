import styled, { css } from 'styled-components/native';
import { vh } from 'react-native-expo-viewport-units';
import {
  Platform,
  FlatList as FlatListLib,
  SafeAreaView as SafeAreaViewLib,
} from 'react-native';

import { pixels } from '../../functions';

export const SafeAreaView = styled(SafeAreaViewLib)``;

export const FlatList = styled(FlatListLib).attrs({
  contentContainerStyle: { paddingBottom: Platform.OS === 'web' ? 112 : 140 },
})`
  ${Platform.OS === 'web' &&
  css`
    flex: 1;
    min-height: ${pixels(Number(vh(100)) - 138)};
  `};

  padding: ${pixels(32)} ${pixels(32)} 0 ${pixels(32)};
`;
