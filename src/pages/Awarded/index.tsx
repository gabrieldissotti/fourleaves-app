import React from 'react';
import ThumbList from '../../components/ThumbList';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import mock from '../../components/ThumbList/mock';
import { IProps } from './interfaces';

const Awarded: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <ThumbList data={mock} navigation={navigation} />
      <Previous />
      <Next mode="share" text="Compartilhar" />
      <Next mode="newRaffle" text="Novo sorteio" />
    </Container>
  );
};

export default Awarded;
