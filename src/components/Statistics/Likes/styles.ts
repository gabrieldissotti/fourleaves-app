import styled, { css } from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pixels } from '../../../functions';
import { isWebPlatform } from '../../../constants';

export const Container = styled.View`
  flex-direction: row;
  /* margin-left: ${pixels(12)}; */

  ${!isWebPlatform &&
  css`
    align-items: center;
  `}
`;

export const Text = styled(typography.primarySmall)`
  color: ${colors.blackLight4};
  margin-left: ${pixels(6)};
`;
