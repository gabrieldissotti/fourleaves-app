import React from 'react';
import { createIconSetFromFontello } from '@expo/vector-icons';
import config from './config.json';
import { IIconsMinds } from './interfaces';

export { IIconsMinds };

const IconsMinds: React.FC<IIconsMinds> = props => {
  const Icons = createIconSetFromFontello(
    config,
    'iconsminds',
    'iconsminds.ttf',
  );

  return <Icons {...props} />;
};

export default IconsMinds;
