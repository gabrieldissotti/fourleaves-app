import React from 'react';
import Profile from '../../components/Profile';

import { Container, Title } from './styles';
import { Previous, Next } from '../../components/Buttons';
import Paragraph from '../../components/Text/Paragraph';

import { IProps } from './interfaces';

const Awarded: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <Profile name="Dianne Russell" thumbnail="" navigation={navigation} />

      <Title>Estatísticas do sorteio</Title>

      <Paragraph>1,8 mil concorrentes válidos</Paragraph>

      <Paragraph>136 concorrentes inválidos</Paragraph>

      <Previous isOpen isRepeat />

      <Next mode="share" text="Compartilhar" />

      <Next
        mode="newRaffle"
        text="Novo sorteio"
        navigation={navigation}
        to="Pages"
      />
    </Container>
  );
};

export default Awarded;
