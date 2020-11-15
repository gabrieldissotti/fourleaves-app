import styled, { css } from 'styled-components/native';
import { IContainer, IRightTrace } from './interfaces';
import { colors } from '../../../../../../../theme';
import { pixels } from '../../../../../../../functions';

export const Container = styled.View<IContainer>`
  height: ${pixels(38)};
  width: ${pixels(38)};
  border-radius: ${pixels(19)};

  justify-content: center;
  align-items: center;

  ${props =>
    props.status === 'active' &&
    css`
      background: ${colors.primaryDefault};
    `}

  ${props =>
    props.status === 'disabled' &&
    css`
      background: ${colors.primaryLight6};
    `}

  ${props =>
    props.status === 'visualized' &&
    css`
      background: ${colors.primaryLight2};
    `}
`;

export const RightTrace = styled.View<IRightTrace>`
  width: ${pixels(26)};
  height: ${pixels(2)};

  ${props =>
    ['disabled', 'active'].includes(String(props.status)) &&
    css`
      background: ${colors.primaryLight6};
    `}

  ${props =>
    props.status === 'visualized' &&
    css`
      background: ${colors.primaryLight2};
    `}

  ${props =>
    props?.fullRightTrace &&
    css`
      width: 100%;
    `}
`;
