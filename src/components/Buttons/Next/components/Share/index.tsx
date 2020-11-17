import React from 'react';

import { SimpleLineIcon } from '../../../../../icons';
import { colors } from '../../../../../theme';

import { Text } from './styles';

type Props = {
  text?: string;
};

const Share: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
      <SimpleLineIcon name="share" color={colors.blackDefault} size={20} />
    </>
  );
};

export default Share;
