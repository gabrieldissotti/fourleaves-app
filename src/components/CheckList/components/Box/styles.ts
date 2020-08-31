import styled, { css } from 'styled-components/native';

import { pixels } from '../../../../functions';
import { colors } from '../../../../theme';

import { IProps } from './interfaces';

export const Container = styled.View<IProps>`
  width: ${pixels(20)};
  height: ${pixels(20)};

  border: ${pixels(1)} solid ${colors.blackLight6};
  border-radius: ${pixels(4)};

  align-items: center;
  justify-content: center;

  ${props =>
    props.isChecked &&
    css`
      border: none;

      background: ${colors.successDefault};
    `}
`;
