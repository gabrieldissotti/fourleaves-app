import { PageProps } from '../../interfaces';

export type IProps = PageProps;

export type Page = {
  id: string;
  name: string;
  thumbnail: string;
  likes: number;
};

export type PageFormatted = {
  id: string;
  text: string;
  thumbnail: string;
  likesCount: number;
};
