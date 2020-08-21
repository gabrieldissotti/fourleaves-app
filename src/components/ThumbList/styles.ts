import styled from 'styled-components/native';
import { FlatList as FlatListLib } from 'react-native';

import { pixels } from '../../functions';
import { colors } from '../../theme';

export const FlatList = styled(FlatListLib)`
  margin: ${pixels(32)} ${pixels(32)} 0 ${pixels(32)};

  border-top-width: ${pixels(1)};
  border-top-color: ${colors.primaryLight7};
`;
