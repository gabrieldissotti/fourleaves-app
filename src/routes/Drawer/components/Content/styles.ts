import styled, { css } from 'styled-components/native';
import { DrawerItem as DrawerItemLib } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { pxToRem } from '../../../../functions';
import { typography, colors } from '../../../../theme';
import { IDrawerItem } from './interfaces';

export const Container = styled.View`
  position: relative;
  padding: ${pxToRem(32)} ${pxToRem(40)};
`;

export const DrawerItem = styled<IDrawerItem | any>(DrawerItemLib).attrs({
  inactiveTintColor: colors.secondary,
  activeTintColor: colors.secondary,
})`
  margin: 0;
  padding: 0;

  ${({ isExit }: any) =>
    isExit &&
    css`
      opacity: 0.5;
    `}
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${pxToRem(16)};
`;

export const Name = styled(typography.PrimaryParagraphBold)`
  margin-left: ${pxToRem(8)};
  color: ${colors.secondary};
`;

export const Frame = styled.View`
  background: transparent;
  border-radius: ${pxToRem(31.5)};
  border: rgba(255, 255, 255, 0.5) ${pxToRem(1.5)} solid;
  padding: ${pxToRem(1)};
  height: ${pxToRem(63)};
  width: ${pxToRem(63)};

  overflow: hidden;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${pxToRem(31.5)};
`;

export const MenuItem = styled(typography.PrimaryParagraphSemiBold)`
  position: relative;

  padding: 0;
`;

export const Dash = styled(Animated.View)`
  width: ${pxToRem(22)};
  height: ${pxToRem(3)};

  background: rgba(255, 255, 255, 0.9);
  border-radius: ${pxToRem(1.5)};

  position: absolute;
  left: ${pxToRem(7)};
  bottom: ${pxToRem(12)};
`;

export const Socials = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: ${pxToRem(114)};

  position: fixed;
  left: ${pxToRem(40)};
  bottom: ${pxToRem(40)};
`;
