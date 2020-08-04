import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Shadow = styled(Animated.View)`
  position: absolute;
  left: 34px;
  top: 8%;
  
  width: 22px;
  height: 90%;

  background: rgba(56, 42, 10, .24);
  box-shadow: -3px -3px 6px rgba(56, 42, 10, .24);
`;

