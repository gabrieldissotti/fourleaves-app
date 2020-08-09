import React, { useMemo } from 'react';

// import { Container } from './styles';
import Left from './components/Left';
import Right from './components/Right';
import Instagram from './components/Instagram';
import Facebook from './components/Facebook';
import Like from './components/Like';

import { IIconFamilyProps } from '../interfaces';

const IconsMind: React.FC<IIconFamilyProps> = ({ icon, color }) => {
  const availableIcons = useMemo<any>(
    () => ({
      left: Left,
      right: Right,
      instagram: Instagram,
      facebook: Facebook,
      like: Like,
    }),
    [],
  );

  if (!availableIcons[icon]) {
    throw Error(`${icon} não foi encontrado em src/icons/IconsMind/index.ts`);
  }

  const Icon = availableIcons[icon];

  return <Icon color={color} />;
};

export default IconsMind;
