import React from 'react';

import { Container } from './styles';

import { Previous, Next } from '../../components/Buttons';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Previous />
      <Next text="Entrar com o facebook" />
    </Container>
  );
};

export default SignIn;
