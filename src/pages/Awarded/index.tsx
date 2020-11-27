import React, { useContext, useEffect } from 'react';
import Profile from '../../components/Profile';

import { Container, Title } from './styles';
import { Previous, Next } from '../../components/Buttons';
import Paragraph from '../../components/Text/Paragraph';

import { IProps } from './interfaces';
import { RaffleContext } from '../../context/RaffleContext';

const Awarded: React.FC<IProps> = ({ navigation }) => {
  const raffle = useContext(RaffleContext);

  return (
    <Container>
      <Profile
        name={raffle.winner.name}
        thumbnail={raffle.winner.pictureUrl}
        link={raffle.winner?.profileLink}
      />

      <Title>Estatísticas do sorteio</Title>

      <Paragraph>
        {`${raffle.statistics?.ranked_users_amount || 0} `}
        concorrentes válidos
      </Paragraph>

      <Previous />

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
