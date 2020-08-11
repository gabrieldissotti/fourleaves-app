import React from 'react';

import { Container } from './styles';

import { Previous, Next } from '../../components/Buttons';
import ThumbList from '../../components/ThumbList';

import mock from '../../components/ThumbList/mock';

const SignIn: React.FC = () => {
  return (
    <Container>
      <ThumbList data={mock} />

      <Previous isOpen />
      <Next text="Entrar com o facebook" />
    </Container>
  );
};

export default SignIn;
