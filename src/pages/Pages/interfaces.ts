import { PageProps } from '../../interfaces';

export type IProps = PageProps;

type Post = {
  id: string;
  message: string;
  created_time: Date;
};

export type Page = {
  id: string;
  name: string;
  thumbnail: string;
  likes: number;
  posts: Post[];
};

export type PageFormatted = {
  id: string;
  text: string;
  thumbnail: string;
  likesCount: number;
};
