import React from 'react';
import { IconsMinds } from '../../../../../icons';
import { colors } from '../../../../../theme';

import { Text } from './styles';

type Props = {
  text?: string;
};

const Default: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
      <IconsMinds name="right" color={colors.blackDefault} size={24} />
    </>
  );
};

export default Default;
