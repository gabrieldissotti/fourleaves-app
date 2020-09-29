export type Item = {
  id: string;
  thumbnail: string;
  text: string;
  statistics?: {
    likes: number;
    comments: number;
    shares: number;
  };
  date: Date;
};

export interface IProps {
  data: Item[];
  navigation?: any;
}
