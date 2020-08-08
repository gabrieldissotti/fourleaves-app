import React, { useMemo } from 'react';

// import { Container } from './styles';
import Left from './components/Left';
import Right from './components/Right';

import { IIconFamilyProps } from '../interfaces';

const IconsMind: React.FC<IIconFamilyProps> = ({ icon, color }) => {
  const availableIcons = useMemo<any>(
    () => ({
      left: Left,
      right: Right,
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
