import styled from 'styled-components/native';

import { pxToRem } from '../../../../functions';
import { colors, typography } from '../../../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${pxToRem(90)};
  padding: ${pxToRem(17)} 0;

  border-bottom-width: ${pxToRem(1)};
  border-bottom-color: ${colors.graylight8};
  border-bottom-style: solid;

  flex-direction: row;
  align-items: center;
`;

export const Wrap = styled.View`
  flex-direction: column;
  margin-left: ${pxToRem(16)};
`;

export const Thumbnail = styled.Image`
  height: ${pxToRem(56)};
  width: ${pxToRem(56)};
  border-radius: ${pxToRem(6)};
`;

export const Text = styled(typography.PrimaryParagraph)`
  color: ${colors.secondary};
`;
