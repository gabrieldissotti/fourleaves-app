import styled, { css } from 'styled-components/native';

import { pixels } from '../../functions';
import { colors, typography } from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${pixels(90)};
  padding: ${pixels(17)} 0;

  flex-direction: row;
  align-items: center;
`;

export const Wrap = styled.View`
  flex-direction: column;
  margin-left: ${pixels(16)};
`;

export const Thumbnail = styled.Image`
  border-radius: ${pixels(6)};
  height: ${pixels(85)};
  width: ${pixels(85)};
`;

export const Text = styled(typography.secondarySubtitle3)`
  color: ${colors.blackDefault};
`;
