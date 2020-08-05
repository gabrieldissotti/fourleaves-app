import styled from 'styled-components/native';
import { typography, colors } from '../../theme';
import MenuBurger from '../../icons/MenuBurger';

export const Container = styled.View`
  margin-top: 24px;
  margin-left: 8px;
  margin-bottom: 24px;
`;

export const Icon: any = styled(MenuBurger)``;

export const Title = styled(typography.PrimaryHeading3Bold)`
  color: ${colors.primarydark7};
`;

export const Description = styled(typography.PrimaryParagraphBold)`
  color: ${colors.primarydark7};
`;
