import styled, { css } from 'styled-components/native';
import { DrawerItem as DrawerItemLib } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { vh } from 'react-native-expo-viewport-units';

import { pixels } from '../../../../functions';
import { typography, colors } from '../../../../theme';
import { IDrawerItem } from './interfaces';
import { isWebPlatform } from '../../../../constants';

export const Container = styled.View`
  position: relative;
  padding: ${pixels(32)} 0;
  padding-left: ${pixels(22)};

  height: ${isWebPlatform ? vh(100) : vh(97)}px;
`;

export const DrawerItem = styled<IDrawerItem | any>(DrawerItemLib).attrs(
  props => ({
    inactiveTintColor: colors.blackDefault,
    activeTintColor: colors.blackDefault,
    labelStyle: {
      fontFamily: 'Nunito_600SemiBold',
      fontSize: 16,
      letterSpacing: 0,
    },
    style: {
      padding: 0,
      margin: 0,
      opacity: props.isExit ? 0.5 : 1,
    },
  }),
)`
  margin: 0;
  padding: 0;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: ${pixels(16)};
`;

export const Name = styled(typography.primaryParagraph)`
  margin-left: ${pixels(8)};

  font-family: 'Nunito_700Bold';
  color: ${colors.blackDefault};
`;

export const Frame = styled.View`
  background: transparent;
  border-radius: ${pixels(31.5)};
  border: rgba(255, 255, 255, 0.4) ${pixels(2)} solid;
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

export const MenuItem = styled.View`
  margin: 0;
  padding: 0;
`;

export const Dash = styled(Animated.View)`
  width: ${pixels(22)};
  height: ${pixels(3)};

  background: rgba(255, 255, 255, 0.9);
  border-radius: ${pixels(1.5)};

  position: absolute;
  left: ${pixels(8)};
  bottom: ${pixels(8)};
`;

export const Socials = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: ${pixels(114)};

  position: absolute;
  left: ${pixels(40)};
  bottom: ${pixels(40)};
`;
