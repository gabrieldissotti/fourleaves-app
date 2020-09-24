import React from 'react';

import { Container, Text, Title } from './styles';

import { Previous } from '../../components/Buttons';
import { Link } from '../../components/Text';
import { IProps } from './interfaces';
import CustomNext from './components/CustomNext';

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
          content="política de privacidade"
        />
      </Text>

      <Previous />
      <CustomNext navigation={navigation} />
    </Container>
  );
};

export default SignIn;
