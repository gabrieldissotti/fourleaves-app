import styled from 'styled-components/native';
import { FlatList as FlatListLib } from 'react-native';

import { pxToRem } from '../../functions';

export const FlatList = styled(FlatListLib)`
  padding-right: ${pxToRem(40)};
  padding-left: ${pxToRem(40)};
`;
