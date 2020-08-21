import styled, { css } from 'styled-components/native';

import { pixels } from '../../../../functions';
import { colors, typography } from '../../../../theme';
import { IContainer } from './interfaces';

export const Container = styled.TouchableOpacity<IContainer>`
  width: 100%;
  height: ${pixels(90)};
  padding: ${pixels(17)} ${pixels(8)};

  border-bottom-width: ${pixels(1)};
  border-bottom-color: ${colors.primaryLight7};

  ${props =>
    props.isFirst &&
    css`
      border-top-width: ${pixels(1)};
      border-top-color: ${colors.primaryLight7};
    `}

  flex-direction: row;
  align-items: center;
`;

export const Wrap = styled.View`
  flex-direction: column;
  margin-left: ${pixels(16)};
`;

export const Thumbnail = styled.Image`
  border-radius: ${pixels(6)};
  height: ${pixels(56)};
  width: ${pixels(56)};
`;

export const Text = styled(typography.primaryParagraph)`
  color: ${colors.blackDefault};
`;
