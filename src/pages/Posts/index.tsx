import React from 'react';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';
import PostList from '../../components/PostList';
import mock from '../../components/PostList/mock';

import { IProps } from './interfaces';

const Posts: React.FC<IProps> = ({ navigation }) => {
  return (
    <Container>
      <PostList data={mock} navigation={navigation} />

      <Previous isOpen navigation={navigation} to="Pages" />
      <Next mode="wizard" step={2} />
    </Container>
  );
};

export default Posts;
