import styled from 'styled-components/native';
import { typography } from '../../theme';
import { pixels } from '../../functions';

export const Container = styled.View`
  flex: 1;
  padding: ${pixels(32)};
`;

export const Title = styled(typography.primarySubtitle3)`
  margin-bottom: ${pixels(16)};
`;

export const Text = styled(typography.primaryParagraph)``;
