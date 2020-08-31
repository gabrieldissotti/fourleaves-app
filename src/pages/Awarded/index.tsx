import React from 'react';
import Profile from '../../components/Profile';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import { IProps } from './interfaces';

const Awarded: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <Profile name="Dianne Russell" thumbnail="" navigation={navigation} />

      <Previous isOpen isRepeat />

      <Next mode="share" text="Compartilhar" />

      <Next mode="newRaffle" text="Novo sorteio" />
    </Container>
  );
};

export default Awarded;
