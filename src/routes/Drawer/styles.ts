import styled, { css } from 'styled-components/native';
import { isWebPlatform } from '../../constants';
import { pixels } from '../../functions';
import colors from '../../theme/colors';

export const Container = styled.View`
  background-color: ${colors.primaryDefault};

  overflow: hidden;

  ${isWebPlatform &&
  css`
    max-width: ${pixels(600)};
    margin: auto;
    position: relative;
    height: 100%;
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: ${pixels(16)};
  `}
`;
