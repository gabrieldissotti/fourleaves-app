import styled, { css } from 'styled-components/native';
import { DrawerItem as DrawerItemLib } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { vh, vw } from 'react-native-expo-viewport-units';

import { pixels } from '../../../../functions';
import { typography, colors } from '../../../../theme';
import { IDrawerItem } from './interfaces';

export const Container = styled.View`
  position: relative;
  padding: ${pixels(32)} 0;
  padding-left: ${pixels(22)};

  height: ${vh(98)}px;
`;

export const DrawerItem = styled<IDrawerItem | any>(DrawerItemLib).attrs(
  props => ({
    inactiveTintColor: colors.blackDefault,
    activeTintColor: colors.blackDefault,
    labelStyle: {
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 24,
    },
    style: {
      padding: 0,
      margin: 0,
      opacity: props.isExit ? 0.5 : 1,
    },
  }),
)``;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${pixels(16)};
`;

export const Name = styled(typography.PrimaryParagraph)`
  margin-left: ${pixels(8)};

  font-family: 'Nunito_700Bold';
  color: ${colors.blackDefault};
`;

export const Frame = styled.View`
  background: transparent;
  border-radius: ${pixels(31.5)};
  border: rgba(255, 255, 255, 0.5) ${pixels(1.5)} solid;
  padding: ${pixels(1)};
  height: ${pixels(63)};
  width: ${pixels(63)};

  overflow: hidden;
`;

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${pixels(31.5)};
`;

export const MenuItem = styled.View``;

export const Dash = styled(Animated.View)`
  width: ${pixels(18)};
  height: ${pixels(3)};

  background: rgba(255, 255, 255, 0.9);
  border-radius: ${pixels(1.5)};

  position: absolute;
  left: ${pixels(16)};
  bottom: ${pixels(14)};
`;

export const Socials = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: ${pixels(114)};

  position: absolute;
  left: ${pixels(40)};
  bottom: ${pixels(40)};
`;
