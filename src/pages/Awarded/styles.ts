import styled from 'styled-components/native';
import { pixels } from '../../functions';
import { typography } from '../../theme';

export const Container = styled.View`
  flex: 1;
  padding: ${pixels(32)};
`;

export const Title = styled(typography.primaryHeading3)`
  margin-top: ${pixels(27)};
  margin-bottom: ${pixels(8)};
`;
