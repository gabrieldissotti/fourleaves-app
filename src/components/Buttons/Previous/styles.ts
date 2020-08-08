import styled, { css } from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pxToRem } from '../../../functions';
import { IconsMind as IconsMindLib } from '../../../icons';

import { IContainer } from './interfaces';

export const Container = styled.TouchableOpacity<IContainer>`
  background: ${colors.secondary};
  height: ${pxToRem(62)};
  border-top-right-radius: ${pxToRem(16)};
  border-bottom-right-radius: ${pxToRem(16)};

  position: fixed;
  bottom: ${pxToRem(40)};
  left: 0;
  width: ${pxToRem(24)};

  ${props =>
    props.isOpen &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 ${pxToRem(16)};
      width: ${pxToRem(112.5)};
    `}
`;

export const IconsMind = styled(IconsMindLib).attrs({
  color: colors.white,
})`
  height: 24;
  width: 16;
`;

export const Text = styled(typography.PrimaryParagraph)`
  color: ${colors.white};
`;
