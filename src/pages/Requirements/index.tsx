import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import CheckList from '../../components/CheckList';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import { Props, Item } from './interfaces';
import { HeaderContext } from '../../context/HeaderContext';
import { RaffleContext } from '../../context/RaffleContext';

const Requirements: React.FC<Props> = ({ navigation }) => {
  const header = useContext(HeaderContext);
  const raffle = useContext(RaffleContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requirements = useMemo<Item[]>(
    () => [
      {
        text: 'Curtir publicação',
        value: 'like_post',
      },
      {
        text: 'Comentar na publicação',
        value: 'comment_in_post',
      },
      {
        text: 'Compartilhar publicação',
        value: 'share_post',
      },
    ],
    [],
  );

  const handleRaffle = useCallback(async () => {
    setIsLoading(true);
    await raffle.raffleNow();
    setIsLoading(false);

    navigation.navigate('Awarded');
  }, [navigation, raffle]);

  useEffect(() => {
    header.changeHeaderTitleAndDescription({
      title: 'Selecione os critérios',
      description: 'como as pessoas podem participar?',
    });
  }, []);

  return (
    <Container>
      <CheckList data={requirements} navigation={navigation} />
      <Previous isOpen navigation={navigation} to="Posts" />

      {raffle.requirements.length > 0 ? (
        <Next
          mode="default"
          text={isLoading ? 'Sorteando...' : 'Sortear agora'}
          onPress={handleRaffle}
        />
      ) : (
        <Next mode="wizard" step={3} />
      )}
    </Container>
  );
};

export default Requirements;
