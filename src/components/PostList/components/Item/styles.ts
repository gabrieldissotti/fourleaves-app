import styled, { css } from 'styled-components/native';

import { Platform } from 'react-native';
import { pixels } from '../../../../functions';
import { colors, typography } from '../../../../theme';
import { IContainer } from './interfaces';

export const Container = styled.TouchableOpacity<IContainer>`
  width: 100%;
  min-height: ${props => (props.hasThumbnail ? pixels(324) : 'auto')};
  padding: ${pixels(16)};

  border-radius: ${pixels(8)};

  flex-direction: column;
  margin-bottom: ${pixels(16)};

  /* work around android shadow+borderRadius bug */
  ${Platform.OS !== 'web' &&
  css`
    border: ${pixels(1)} solid ${colors.blackDefaultAlpha14};
  `}
`;

export const Wrap = styled.View<{ hasThumbnail: boolean }>`
  margin-bottom: ${props => (!props.hasThumbnail ? pixels(16) : 0)};
`;

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
`;

export const Text = styled(typography.primaryParagraph)`
  color: ${colors.blackDefault};
  width: 100%;
`;
export const Date = styled(typography.secondarySmall)`
  color: ${colors.blackLight4};
`;

export const SeeMore = styled(typography.primaryParagraphLink)``;

export const ClickableArea = styled.TouchableWithoutFeedback``;
