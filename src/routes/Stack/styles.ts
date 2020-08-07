import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Shadow = styled(Animated.View)`
  position: absolute;
  left: 7.5%;
  top: 8%;

  width: 24px;
  height: 90%;

  background: rgba(56, 42, 10, 0.14);

  filter: blur(4px);
`;
