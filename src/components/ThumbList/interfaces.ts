import { IProps as IItemProps } from './components/Item/interfaces';

export interface IItem extends IItemProps {
  id: string;
}

export interface IProps {
  data: IItem[];
}
