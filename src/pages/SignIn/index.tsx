import React, { useContext, useEffect } from 'react';

import { Container, Text, Title } from './styles';

import { Previous } from '../../components/Buttons';
import { Link } from '../../components/Text';
import { IProps } from './interfaces';
import CustomNext from './components/CustomNext';
import { AuthContext } from '../../context/AuthContext';
import { links } from '../../configs';

const SignIn: React.FC<IProps> = ({ navigation }) => {
  const { isReadyToNavigate } = useContext(AuthContext);

  useEffect(() => {
    if (isReadyToNavigate) {
      navigation.navigate('Pages');
    }
  }, [isReadyToNavigate, navigation]);

  return (
    <Container>
      <Title>Olá,</Title>

      <Text>
        {'Ao continuar, você concorda com os '}
        <Link
          isToWeb
          to={links.terms_of_service}
          navigation={navigation}
          content="termos de uso"
        />
        {' e a com a nossa '}
        <Link
          isToWeb
          to={links.privacy_policy}
          navigation={navigation}
          content="política de privacidade"
        />
        .
      </Text>

      <Previous />

      <CustomNext navigation={navigation} />
    </Container>
  );
};

export default SignIn;
