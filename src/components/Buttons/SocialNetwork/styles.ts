import styled from 'styled-components/native';
import { colors } from '../../../theme';
import { pxToRem, hexToRGBA } from '../../../functions';
import { IconsMind as IconsMindLib } from '../../../icons';

export const Container = styled.TouchableOpacity.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 1,
})`
  background: ${colors.primary};
  border-radius: ${pxToRem(16)};

  height: ${pxToRem(44)};
  width: ${pxToRem(44)};
  border-radius: ${pxToRem(22)};

  align-items: center;
  justify-content: center;

  box-shadow: 0px 3px 8px ${hexToRGBA(colors.primarydark8, 0.16)};
`;

export const IconsMind = styled(IconsMindLib).attrs({
  color: colors.primarydark7,
})``;
