import React, { useContext, useEffect } from 'react';
import ThumbList from '../../components/ThumbList';

import { HeaderContext } from '../../context/HeaderContext';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import mock from '../../components/ThumbList/mock';
import { IProps } from './interfaces';

const SignUp: React.FC<IProps> = ({ navigation }) => {
  const header = useContext(HeaderContext);

  useEffect(() => {
    header.changeHeaderTitleAndDescription({
      title: 'Selecione a página',
      description: 'em qual página você publicou o sorteio?',
    });
  }, []);

  return (
    <Container>
      <ThumbList data={mock} navigation={navigation} />
      <Previous />
      <Next mode="wizard" step={1} />
    </Container>
  );
};

export default SignUp;
