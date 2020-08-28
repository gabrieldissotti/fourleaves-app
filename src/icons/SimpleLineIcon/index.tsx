import React from 'react';
import { createIconSetFromFontello } from '@expo/vector-icons';
import config from './config.json';
import { ISimpleLineIcon } from './interfaces';

export { ISimpleLineIcon };

const SimpleLineIcon: React.FC<ISimpleLineIcon> = props => {
  const Icons = createIconSetFromFontello(
    config,
    'simplelineicon',
    'simplelineicon.ttf',
  );

  return <Icons {...props} />;
};

export default SimpleLineIcon;
