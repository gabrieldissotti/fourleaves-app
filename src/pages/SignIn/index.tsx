import React from 'react';

import { Container, Text, Title } from './styles';

import { Previous, Next } from '../../components/Buttons';
import { Link } from '../../components/Text';
import { IProps } from './interfaces';

const SignIn: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <Title>Olá,</Title>

      <Text>
        Ao continuar, você concorda com os
        <Link to="Pages" navigation={navigation} content="termos de uso" />
        e a com a nossa
        <Link
          to="Pages"
          navigation={navigation}
          content="politica de privacidade"
        />
      </Text>

      <Previous />

      <Next text="Entrar com o facebook" />
    </Container>
  );
};

export default SignIn;
