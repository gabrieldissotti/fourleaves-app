import styled, { css } from 'styled-components/native';

import colors from '../../theme/colors';

import { BarInterface } from './interfaces';

export const Container = styled.TouchableOpacity`
  height: 24px;
  
  flex-direction: column;
  display: flex;
`;

const Bar = styled.View<BarInterface>`
  height: 2px;
  width: 11px;

  background: ${colors.primarydark7};
  border-radius: 1px;
`;

export const LowerBar = styled(Bar)``;

export const FullBar = styled(Bar)`
  ${props => props.rotate && css`
    transform: rotate(45deg);
  `}
  
  ${props => props.invertedRotate && css`
    position: absolute;
    
    transform: rotate(130deg);
  `}

  margin: 5px 0;
  
  width: 22px;
`;