import styled, { css } from 'styled-components/native';

import { pixels } from '../../../../functions';
import { colors, typography } from '../../../../theme';
import { IContainer } from './interfaces';

export const Container = styled.TouchableOpacity<IContainer>`
  width: 100%;
  height: ${pixels(317)};
  padding: ${pixels(16)};

  border-radius: ${pixels(8)};

  flex-direction: column;
`;

export const Wrap = styled.View``;

export const Actions = styled.View`
  margin-top: ${pixels(10)};

  flex-direction: row;
  justify-content: space-between;
`;

export const Thumbnail = styled.Image`
  margin-top: ${pixels(16)};
  margin-bottom: ${pixels(16)};
  height: ${pixels(162)};
  width: 100%;

  border-radius: ${pixels(6)};
`;

export const Text = styled(typography.primaryParagraph)`
  color: ${colors.blackDefault};
  width: 100%;
`;
export const Date = styled(typography.secondarySmall)`
  color: ${colors.blackLight4};
`;

export const SeeMore = styled(typography.primaryParagraphLink)``;
