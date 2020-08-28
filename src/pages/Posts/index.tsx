import React from 'react';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import { IProps } from './interfaces';

const Posts: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <Previous isOpen navigation={navigation} to="Pages" />
      <Next mode="wizard" step={2} />
    </Container>
  );
};

export default Posts;
