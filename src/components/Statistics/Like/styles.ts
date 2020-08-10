import styled from 'styled-components/native';
import { IconsMind as IconsMindLib } from '../../../icons';
import { colors, typography } from '../../../theme';
import { pxOrRem } from '../../../functions';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled(typography.PrimarySmall)`
  color: ${colors.secondary};
`;

export const IconsMind = styled(IconsMindLib).attrs({
  color: colors.primarydark8,
})`
  margin-right: ${pxOrRem(6)};
`;
