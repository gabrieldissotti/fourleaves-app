import styled, { css } from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pxOrRem } from '../../../functions';
import { isWebVersion } from '../../../constants';

export const Container = styled.View`
  flex-direction: row;

  ${!isWebVersion &&
  css`
    align-items: center;
  `}
`;

export const Text = styled(typography.PrimarySmall)`
  color: ${colors.secondary};
  margin-left: ${pxOrRem(6)};
`;
