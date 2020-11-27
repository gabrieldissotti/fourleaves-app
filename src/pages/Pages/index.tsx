import React, { useCallback, useEffect, useState } from 'react';
import ThumbList from '../../components/ThumbList';

import { Container } from './styles';
import { Previous, Next } from '../../components/Buttons';
import FourLeavesAPI from '../../apis/FourLeaves';
import { IProps, Page, PageFormatted } from './interfaces';

const SignUp: React.FC<IProps> = ({ navigation }) => {
  const [pages, setPages] = useState<PageFormatted[]>([]);

  const fetchPages = useCallback(async () => {
    const updatedPagesList: Page[] = await FourLeavesAPI.getPagesWithPosts();
    if (!updatedPagesList) return;

    const formattedPages = updatedPagesList?.map(page => ({
      id: page.id,
      text: page.name,
      thumbnail: page.thumbnail,
      likesCount: page.likes,
      posts: page.posts,
    }));

    setPages(formattedPages);
  }, []);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  return (
    <Container>
      <ThumbList data={pages} navigation={navigation} />

      <Previous />

      <Next mode="wizard" step={1} />
    </Container>
  );
};

export default SignUp;
