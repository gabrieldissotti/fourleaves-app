import React, { useMemo } from 'react';

// import { Container } from './styles';
import Left from './components/Left';

import { IIconFamilyProps } from '../interfaces';

const IconsMind: React.FC<IIconFamilyProps> = ({ icon }) => {
  const availableIcons = useMemo<any>(
    () => ({
      left: Left,
    }),
    [],
  );

  if (!availableIcons[icon]) {
    throw Error(`${icon} não foi encontrado em src/icons/IconsMind/index.ts`);
  }

  const Icon = availableIcons[icon];

  return <Icon />;
};

export default IconsMind;
