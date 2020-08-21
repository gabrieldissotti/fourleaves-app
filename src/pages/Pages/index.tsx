import React from 'react';
import ThumbList from '../../components/ThumbList';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import mock from '../../components/ThumbList/mock';
import { IProps } from './interfaces';

const SignUp: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <ThumbList data={mock} />
      <Previous isOpen />
      <Next text="step1" navigation={navigation} to="Pages" />
    </Container>
  );
};

export default SignUp;
