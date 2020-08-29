import React from 'react';
import ThumbList from '../../components/ThumbList';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import mock from '../../components/ThumbList/mock';
import { IProps } from './interfaces';

const SignUp: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <ThumbList data={mock} navigation={navigation} />
      <Previous />
      <Next mode="wizard" step={1} />
    </Container>
  );
};

export default SignUp;