import React, { useContext, useEffect } from 'react';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';
import PostList from '../../components/PostList';
import mock from '../../components/PostList/mock';

import { IProps } from './interfaces';
import { HeaderContext } from '../../context/HeaderContext';

const Posts: React.FC<IProps> = ({ navigation }) => {
  const header = useContext(HeaderContext);

  useEffect(() => {
    header.changeHeaderTitleAndDescription({
      title: 'Selecione a publicação',
      description: 'qual é a publicação do sorteio?',
    });
  }, []);

  return (
    <Container>
      <PostList data={mock} navigation={navigation} />

      <Previous isOpen navigation={navigation} to="Pages" />
      <Next mode="wizard" step={2} />
    </Container>
  );
};

export default Posts;
