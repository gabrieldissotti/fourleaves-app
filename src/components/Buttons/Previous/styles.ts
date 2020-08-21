import styled, { css } from 'styled-components/native';
import { colors, typography } from '../../../theme';
import { pixels } from '../../../functions';

import { IContainer } from './interfaces';

export const Container = styled.TouchableOpacity<IContainer>`
  background: ${colors.blackDark1};
  height: ${pixels(62)};
  border-top-right-radius: ${pixels(16)};
  border-bottom-right-radius: ${pixels(16)};

  position: absolute;
  bottom: ${pixels(40)};
  left: 0;
  width: ${pixels(24)};

  ${props =>
    props.isOpen &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 ${pixels(16)};
      width: ${pixels(112.5)};
    `}
`;

export const Text = styled(typography.primaryParagraph)`
  color: ${colors.whiteDefault};
`;
