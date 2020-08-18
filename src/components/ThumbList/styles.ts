import styled from 'styled-components/native';
import { FlatList as FlatListLib } from 'react-native';

import { pixels } from '../../functions';

export const FlatList = styled(FlatListLib)`
  padding: 0 ${pixels(40)};
`;
