import styled, { css } from 'styled-components/native';

import { Platform } from 'react-native';
import { pxOrRem } from '../../../../functions';
import { colors, typography } from '../../../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${pxOrRem(90)};
  padding: ${pxOrRem(17)} 0;

  border-bottom-width: ${pxOrRem(1)};
  border-bottom-color: ${colors.graylight8};

  flex-direction: row;
  align-items: center;
`;

export const Wrap = styled.View`
  flex-direction: column;
  margin-left: ${pxOrRem(16)};
`;

export const Thumbnail = styled.Image`
  border-radius: ${pxOrRem(6)};
  height: ${pxOrRem(56)};
  width: ${pxOrRem(56)};
`;

export const Text = styled(typography.PrimaryParagraph)`
  color: ${colors.secondary};
`;
