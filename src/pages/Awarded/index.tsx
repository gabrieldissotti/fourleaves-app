import React, { useContext, useEffect } from 'react';
import Profile from '../../components/Profile';

import { Container, Title } from './styles';
import { Previous, Next } from '../../components/Buttons';
import Paragraph from '../../components/Text/Paragraph';

import { IProps } from './interfaces';
import { HeaderContext } from '../../context/HeaderContext';

const Awarded: React.FC<IProps> = ({ navigation }) => {
  const header = useContext(HeaderContext);

  useEffect(() => {
    header.changeHeaderTitleAndDescription({
      title: 'Premiação',
      description: 'confira quem foi premiado',
    });
  }, []);

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
