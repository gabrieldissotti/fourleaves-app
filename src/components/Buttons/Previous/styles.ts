import styled, { css } from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pxOrRem } from '../../../functions';
import { IconsMind as IconsMindLib } from '../../../icons';

import { IContainer } from './interfaces';

export const Container = styled.TouchableOpacity<IContainer>`
  background: ${colors.secondary};
  height: ${pxOrRem(62)};
  border-top-right-radius: ${pxOrRem(16)};
  border-bottom-right-radius: ${pxOrRem(16)};

  position: fixed;
  bottom: ${pxOrRem(40)};
  left: 0;
  width: ${pxOrRem(24)};

  ${props =>
    props.isOpen &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 ${pxOrRem(16)};
      width: ${pxOrRem(112.5)};
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
