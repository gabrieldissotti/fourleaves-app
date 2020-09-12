import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { WebView } from 'react-native-webview';
import { Platform } from 'react-native';
import { Container, Text, Title } from './styles';

import { Previous, Next } from '../../components/Buttons';
import { Link } from '../../components/Text';
import { IProps, AuthResponse } from './interfaces';

import {
  handleSignWebIn,
  getFacebookLoginURL,
} from '../../services/facebook/login';
import { FacebookConfig } from '../../configs';

const SignIn: React.FC<IProps> = ({ navigation }) => {
  const [isOpenWebView, setIsOpenWebView] = useState(false);
  const [authInfo, setAuthInfo] = useState<AuthResponse>();

  useEffect(() => {
    if (Platform.OS !== 'web') {
      return;
    }
    const query = ''; // new URLSearchParams(window.location.search);
    const data = query.get('data');

    if (!data) return;

    const parsedData = JSON.parse(data);
    console.log('user autheticated: ', parsedData.user.name);

    // async function tester() {
    //   const test = await axios.get('http://localhost:3333/facebook/pages', {
    //     headers: {
    //       Authorization: `Bearer ${parsedData.token}`,
    //     },
    //   });

    //   console.log(test);
    // }

    // tester();
  }, []);

  const handleSignIn = () => {
    if (Platform.OS === 'web') {
      handleSignWebIn();
    }

    setIsOpenWebView(true);
  };

  if (isOpenWebView) {
    return (
      <WebView
        source={{
          uri: getFacebookLoginURL(),
        }}
        onMessage={e => {
          const { data } = e.nativeEvent;

          const authorization: AuthResponse = JSON.parse(data);

          setAuthInfo(authorization);
        }}
      />
    );
  }

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
