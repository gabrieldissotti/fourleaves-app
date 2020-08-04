import styled from 'styled-components/native';
import { PrimaryHeading3Bold, PrimaryParagraphBold } from '../../theme/fonts';
import colors from '../../theme/colors';
import MenuBurger from '../../icons/MenuBurger';

export const Container = styled.View`
  margin-top: 24px;
  margin-left: 8px;
  margin-bottom: 24px;
`;

export const Icon: any = styled(MenuBurger)``;

export const Title = styled(PrimaryHeading3Bold)`
  color: ${colors.primarydark7};
`;

export const Description = styled(PrimaryParagraphBold)`
  color: ${colors.primarydark7};
`;
