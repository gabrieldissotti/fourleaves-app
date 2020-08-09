import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../theme/colors';

export const Container = styled.View`
  background-color: ${colors.primary};

  ${Platform.OS === 'web' &&
  css`
    overflow-x: hidden;
  `}
`;
