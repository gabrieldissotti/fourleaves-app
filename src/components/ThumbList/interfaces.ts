type ItemData = {
  thumbnail: string;
  text: string;
  statistics?: string;
};

export interface IProps {
  data: ItemData[];
  navigation?: any;
}
