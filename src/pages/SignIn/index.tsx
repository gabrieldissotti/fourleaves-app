import React from 'react';

import { Container } from './styles';

import { Previous, Next } from '../../components/Buttons';
import ThumbList from '../../components/ThumbList';
import CustomIcon from '../../icons/NewIconsMund';

import mock from '../../components/ThumbList/mock';

const SignIn: React.FC = () => {
  return (
    <Container>
      <ThumbList data={mock} />

      <CustomIcon name="arrow-down-3" size={32} color="#bf1313" />

      <Previous isOpen />
      <Next text="Entrar com o facebook" />
    </Container>
  );
};

export default SignIn;
