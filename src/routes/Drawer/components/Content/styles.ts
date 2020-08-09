import styled, { css } from 'styled-components/native';
import { DrawerItem as DrawerItemLib } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { pxOrRem } from '../../../../functions';
import { typography, colors } from '../../../../theme';
import { IDrawerItem } from './interfaces';

export const Container = styled.View`
  position: relative;
  padding: ${pxOrRem(32)} ${pxOrRem(40)};
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

  margin-bottom: ${pxOrRem(16)};
`;

export const Name = styled(typography.PrimaryParagraphBold)`
  margin-left: ${pxOrRem(8)};
  color: ${colors.secondary};
`;

export const Frame = styled.View`
  background: transparent;
  border-radius: ${pxOrRem(31.5)};
  border: rgba(255, 255, 255, 0.5) ${pxOrRem(1.5)} solid;
  padding: ${pxOrRem(1)};
  height: ${pxOrRem(63)};
  width: ${pxOrRem(63)};

  overflow: hidden;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${pxOrRem(31.5)};
`;

export const MenuItem = styled(typography.PrimaryParagraphSemiBold)`
  position: relative;

  padding: 0;
`;

export const Dash = styled(Animated.View)`
  width: ${pxOrRem(22)};
  height: ${pxOrRem(3)};

  background: rgba(255, 255, 255, 0.9);
  border-radius: ${pxOrRem(1.5)};

  position: absolute;
  left: ${pxOrRem(7)};
  bottom: ${pxOrRem(12)};
`;

export const Socials = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: ${pxOrRem(114)};

  position: fixed;
  left: ${pxOrRem(40)};
  bottom: ${pxOrRem(40)};
`;
