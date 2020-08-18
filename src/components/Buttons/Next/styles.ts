import styled from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pixels } from '../../../functions';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${pixels(16)};
  width: ${pixels(112.5)};

  width: ${pixels(234)};
  height: ${pixels(62)};

  background-color: ${colors.primaryDefault};
  border-top-left-radius: ${pixels(16)};
  border-bottom-left-radius: ${pixels(16)};

  position: absolute;
  bottom: ${pixels(40)};
  right: 0;
`;

export const Text = styled(typography.PrimaryParagraph)`
  color: ${colors.primaryDefaultdark8};
`;
