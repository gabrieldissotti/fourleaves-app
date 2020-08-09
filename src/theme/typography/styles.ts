import styled from 'styled-components/native';
import { pxOrRem } from '../../functions';

export const PrimaryHeading3Bold = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: ${pxOrRem(24)};
  line-height: ${pxOrRem(36)};
  letter-spacing: 0;
  color: red;
`;

export const PrimaryParagraphBold = styled.Text`
  font-family: 'Nunito_700Bold';
  font-size: ${pxOrRem(16)};
  line-height: ${pxOrRem(24)};
  letter-spacing: 0;
  color: red;
`;

export const PrimaryParagraph = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: ${pxOrRem(16)};
  line-height: ${pxOrRem(24)};
  letter-spacing: 0;
  color: red;
`;

export const PrimaryParagraphSemiBold = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: ${pxOrRem(16)};
  line-height: ${pxOrRem(24)};
  letter-spacing: 0;
  color: red;
`;

export const PrimarySmall = styled.Text`
  font-family: 'Nunito_400Regular';
  font-size: ${pxOrRem(14)};
  line-height: ${pxOrRem(21)};
  letter-spacing: 0;
  color: red;
`;
