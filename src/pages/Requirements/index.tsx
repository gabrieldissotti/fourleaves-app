import React from 'react';
import CheckList from '../../components/CheckList';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import mock from '../../components/CheckList/mock';
import { IProps } from './interfaces';

const Requirements: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <CheckList data={mock} navigation={navigation} />
      <Previous isOpen navigation={navigation} to="Posts" />
      <Next mode="wizard" step={3} />
    </Container>
  );
};

export default Requirements;
