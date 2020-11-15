import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';
import PostList from '../../components/PostList';

import { IProps } from './interfaces';
import { HeaderContext } from '../../context/HeaderContext';

type Post = {
  created_time: Date;
  id: string;
  message: string;
  full_picture: string;
  likes: number;
  comments: number;
  shares: number;
};

type FormattedPost = {
  id: string;
  thumbnail: string;
  text: string;
  date: Date;
  statistics: {
    likes: number;
    comments: number;
    shares: number;
  };
};

type UseRouteProp = RouteProp<
  {
    posts: {
      posts: Post[];
    };
  },
  'posts'
>;

const Posts: React.FC<IProps> = ({ navigation }) => {
  const [postListData, setPostListData] = useState<FormattedPost[]>(
    [] as FormattedPost[],
  );
  const { params } = useRoute<UseRouteProp>();

  const header = useContext(HeaderContext);

  const getPostListData = useCallback(
    (): FormattedPost[] =>
      params.posts?.map(post => ({
        id: post.id,
        thumbnail: post?.full_picture,
        text: post.message,
        date: post.created_time,
        statistics: {
          likes: post.likes,
          comments: post.comments,
          shares: post.shares,
        },
      })),
    [params.posts],
  );

  useEffect(() => {
    header.changeHeaderTitleAndDescription({
      title: 'Selecione a publicação',
      description: 'qual é a publicação do sorteio?',
    });

    const updatedPostList = getPostListData();

    if (updatedPostList) setPostListData(updatedPostList);
  }, []); // eslint-disable-line

  return (
    <Container>
      <PostList data={postListData} navigation={navigation} />

      <Previous isOpen navigation={navigation} to="Pages" />

      <Next mode="wizard" step={2} />
    </Container>
  );
};

export default Posts;
