import styled from 'styled-components/native';
import { colors } from '../../../theme';
import { pixels } from '../../../functions';
import { CustomIcons as CustomIconsLib } from '../../../icons';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 4,
})`
  background: ${colors.primaryDefault};
  border-radius: ${pixels(16)};

  height: ${pixels(44)};
  width: ${pixels(44)};
  border-radius: ${pixels(22)};

  align-items: center;
  justify-content: center;

  box-shadow: 0px 3px 8px ${colors.blackDefaultAlpha14};
`;

export const CustomIcons = styled(CustomIconsLib).attrs({
  color: colors.blackDefault,
})``;
