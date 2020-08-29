import styled from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pixels } from '../../../functions';

export const Container = styled.View`
  flex-direction: row;
  margin-left: ${pixels(12)};

  align-items: center;
`;

export const Text = styled(typography.primarySmall)`
  color: ${colors.blackLight4};
  margin-left: ${pixels(6)};
`;
