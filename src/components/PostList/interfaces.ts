export type Item = {
  id: string;
  thumbnail: string;
  text: string;
  statistics?: string;
  date: Date;
};

export interface IProps {
  data: Item[];
  navigation?: any;
}
