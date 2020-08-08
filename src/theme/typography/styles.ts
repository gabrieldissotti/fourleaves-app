import styled from 'styled-components/native';
import { pxToRem } from '../../functions';

export const PrimaryHeading3Bold = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(36)};
  letter-spacing: 0;
  color: red;
`;

export const PrimaryParagraphBold = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(24)};
  letter-spacing: 0;
  color: red;
`;

export const PrimaryParagraph = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(24)};
  letter-spacing: 0;
  color: red;
`;

export const PrimaryParagraphSemiBold = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(24)};
  letter-spacing: 0;
  color: red;
`;
