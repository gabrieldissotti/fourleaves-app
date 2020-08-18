import styled from 'styled-components/native';
import { typography, colors } from '../../../../theme';
import MenuBurger from '../../../../icons/MenuBurger';

export const Container = styled.View`
  margin-top: 24px;
  margin-left: 8px;
  margin-bottom: 24px;
`;

export const Icon: any = styled(MenuBurger)``;

export const Title = styled(typography.primaryHeading3)`
  font-family: 'Nunito_700Bold';
  color: ${colors.blackDefault};
`;

export const Description = styled(typography.primaryParagraph)`
  color: ${colors.blackDefault};
  font-family: 'Nunito_700Bold';
`;
