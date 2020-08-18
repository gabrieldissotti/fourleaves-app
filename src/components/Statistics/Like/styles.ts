import styled, { css } from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pixels } from '../../../functions';
import { isWebVersion } from '../../../constants';

export const Container = styled.View`
  flex-direction: row;

  ${!isWebVersion &&
  css`
    align-items: center;
  `}
`;

export const Text = styled(typography.primarySmall)`
  color: ${colors.blackDefault};
  margin-left: ${pixels(6)};
`;
