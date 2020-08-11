import styled from 'styled-components/native';
import { colors } from '../../../theme';
import { pxOrRem, hexToRGBA } from '../../../functions';
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
  background: ${colors.primary};
  border-radius: ${pxOrRem(16)};

  height: ${pxOrRem(44)};
  width: ${pxOrRem(44)};
  border-radius: ${pxOrRem(22)};

  align-items: center;
  justify-content: center;

  box-shadow: 0px 3px 8px ${hexToRGBA(colors.primarydark8, 0.16)};
`;

export const CustomIcons = styled(CustomIconsLib).attrs({
  color: colors.primarydark7,
})``;
