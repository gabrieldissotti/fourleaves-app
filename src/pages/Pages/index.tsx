import React from 'react';
import ThumbList from '../../components/ThumbList';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import mock from '../../components/ThumbList/mock';

const SignUp: React.FC = () => {
  return (
    <Container>
      <ThumbList data={mock} />
      <Previous isOpen />
      <Next />
    </Container>
  );
};

export default SignUp;
