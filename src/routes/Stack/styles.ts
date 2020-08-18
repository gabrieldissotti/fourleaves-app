import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Platform } from 'react-native';
import { colors } from '../../theme';

export const Shadow = styled(Animated.View)`
  position: absolute;
  left: 7.5%;
  top: 8%;

  width: 24px;
  height: 90%;

  background-color: rgba(56, 42, 10, 0.14);
  ${Platform.OS === 'web' &&
  css`
    filter: blur(4px);
  `}
`;
