import styled, { css } from 'styled-components/native';
import { isDesktopPlatform } from '../../constants';
import { pixels } from '../../functions';
import colors from '../../theme/colors';

export const Container = styled.View`
  background-color: ${colors.primaryDefault};

  overflow: hidden;

  ${isDesktopPlatform &&
  css`
    max-width: ${pixels(600)};
    margin: auto;
    position: relative;
    height: 100%;
    width: 100%;
  `}
`;

export const Background = styled.View`
  background-color: #fafafa;
  height: 100%;
  width: 100%;
`;
