import React from 'react';

import { Container } from './styles';

import { IProps } from './interfaces';

import CustomIcons from '../../../../icons/CustomIcons';
import { colors } from '../../../../theme';

const Box: React.FC<IProps> = ({ isChecked }) => {
  return (
    <Container isChecked={isChecked}>
      {isChecked && <CustomIcons icon="check" color={colors.whiteDefault} />}
    </Container>
  );
};

export default Box;
