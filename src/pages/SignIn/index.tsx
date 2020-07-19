import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import logoImg from '../../../assets/example-people.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Gabriel Dissotti do Nascimento Rodrigues</Title>
    </Container>
  );
};

export default SignIn;
