import React, { useEffect } from 'react';

import axios from 'axios';
import { Container, Text, Title } from './styles';

import { Previous, Next } from '../../components/Buttons';
import { Link } from '../../components/Text';
import { IProps } from './interfaces';

import { handleSignIn } from '../../services/facebook/login';

const SignIn: React.FC<IProps> = ({ navigation }) => {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const data = query.get('data');

    if (!data) return;

    const parsedData = JSON.parse(data);
    console.log('user autheticated: ', parsedData.user.name);

    async function tester() {
      const test = await axios.get('http://localhost:3333/facebook/pages', {
        headers: {
          Authorization: `Bearer ${parsedData.token}`,
        },
      });

      console.log(test);
    }

    tester();
  }, []);
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

      <Next
        text="Entrar com o facebook"
        navigation={navigation}
        to="Pages"
        onPress={handleSignIn}
      />
    </Container>
  );
};

export default SignIn;
