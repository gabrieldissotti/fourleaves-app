import styled from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pxOrRem } from '../../../functions';
import { IconsMind as IconsMindLib } from '../../../icons';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${pxOrRem(16)};
  width: ${pxOrRem(112.5)};

  width: ${pxOrRem(234)};
  height: ${pxOrRem(62)};

  background-color: ${colors.primary};
  border-top-left-radius: ${pxOrRem(16)};
  border-bottom-left-radius: ${pxOrRem(16)};

  position: absolute;
  bottom: ${pxOrRem(40)};
  right: 0;
`;

export const IconsMind = styled(IconsMindLib).attrs({
  color: colors.primarydark8,
})`
  height: 24;
  width: 16;
`;

export const Text = styled(typography.PrimaryParagraph)`
  color: ${colors.primarydark8};
`;
