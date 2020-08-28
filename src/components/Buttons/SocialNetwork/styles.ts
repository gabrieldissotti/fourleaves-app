import styled from 'styled-components/native';
import { colors } from '../../../theme';
import { pixels } from '../../../functions';
import { CustomIcons as CustomIconsLib } from '../../../icons';

export const Container = styled.View`
  background: ${colors.primaryDefault};
  border-radius: ${pixels(16)};

  height: ${pixels(44)};
  width: ${pixels(44)};
  border-radius: ${pixels(22)};

  align-items: center;
  justify-content: center;
`;

export const CustomIcons = styled(CustomIconsLib).attrs({
  color: colors.blackDefault,
})``;
