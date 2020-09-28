import React, { useContext, useEffect, useMemo } from 'react';
import CheckList from '../../components/CheckList';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';

import { Props, Item } from './interfaces';
import { HeaderContext } from '../../context/HeaderContext';

const Requirements: React.FC<Props> = ({ navigation }) => {
  const header = useContext(HeaderContext);

  const requirements = useMemo<Item[]>(
    () => [
      {
        text: 'Curtir página',
        value: 'like_page',
      },
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
      <Next mode="wizard" step={3} />
    </Container>
  );
};

export default Requirements;
