import styled, { css } from 'styled-components/native';

import { Platform } from 'react-native';
import { pixels } from '../../../../functions';
import { colors, typography } from '../../../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${pixels(90)};
  padding: ${pixels(17)} 0;

  border-bottom-width: ${pixels(1)};
  border-bottom-color: ${colors.blackLight6};

  flex-direction: row;
  align-items: center;
`;

export const Wrap = styled.View`
  flex-direction: column;
  margin-left: ${pixels(16)};
`;

export const Thumbnail = styled.Image`
  border-radius: ${pixels(6)};
  height: ${pixels(56)};
  width: ${pixels(56)};
`;

export const Text = styled(typography.PrimaryParagraph)`
  color: ${colors.blackDefault};
`;
