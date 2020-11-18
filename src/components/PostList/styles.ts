import styled, { css } from 'styled-components/native';
import { vh } from 'react-native-expo-viewport-units';
import {
  FlatList as FlatListLib,
  SafeAreaView as SafeAreaViewLib,
} from 'react-native';

import { pixels } from '../../functions';
import { isWebVersion } from '../../constants';

export const SafeAreaView = styled(SafeAreaViewLib)``;

export const FlatList = styled(FlatListLib).attrs({
  contentContainerStyle: { paddingBottom: isWebVersion ? 112 : 140 },
})`
  ${isWebVersion &&
  css`
    flex: 1;
    min-height: ${pixels(Number(vh(100)) - 138)};
  `};

  padding: ${pixels(32)} ${pixels(16)} 0 ${pixels(16)};
`;
