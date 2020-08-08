import styled from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pxToRem } from '../../../functions';
import { IconsMind as IconsMindLib } from '../../../icons';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${pxToRem(16)};
  width: ${pxToRem(112.5)};

  width: ${pxToRem(234)};
  height: ${pxToRem(62)};

  background-color: ${colors.primary};
  border-top-left-radius: ${pxToRem(16)};
  border-bottom-left-radius: ${pxToRem(16)};

  position: fixed;
  bottom: ${pxToRem(40)};
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
