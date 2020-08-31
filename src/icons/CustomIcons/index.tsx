import React, { useMemo } from 'react';

import Instagram from './components/Instagram';
import Facebook from './components/Facebook';
import Check from './components/Check';

import { IIconFamilyProps } from '../interfaces';

const CustomIcons: React.FC<IIconFamilyProps> = ({ icon, color }) => {
  const availableIcons = useMemo<any>(
    () => ({
      instagram: Instagram,
      facebook: Facebook,
      check: Check,
    }),
    [],
  );

  if (!availableIcons[icon]) {
    throw Error(`${icon} não foi encontrado em src/icons/CustomIcons/index.ts`);
  }

  const Icon = availableIcons[icon];

  return <Icon color={color} />;
};

export default CustomIcons;
