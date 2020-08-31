import styled, { css } from 'styled-components/native';

import { pixels } from '../../../../functions';
import { colors, typography } from '../../../../theme';
import { IContainer } from './interfaces';

import BoxLib from '../Box';

export const Container = styled.TouchableOpacity<IContainer>`
  width: 100%;
  height: ${pixels(54)};
  padding: ${pixels(16)} ${pixels(8)};

  border-bottom-width: ${pixels(1)};
  border-bottom-color: ${colors.primaryLight7};

  ${props =>
    props.isFirst &&
    css`
      border-top-width: ${pixels(1)};
      border-top-color: ${colors.primaryLight7};
    `}

  flex-direction: row;
  align-items: center;
`;

export const Box = styled(BoxLib)``;

export const Text = styled(typography.primaryParagraph)`
  color: ${colors.blackDefault};

  margin-left: ${pixels(8)};
`;
