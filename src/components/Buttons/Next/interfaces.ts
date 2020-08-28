export type IMode = 'default' | 'newRaffle' | 'share' | 'wizard';

export interface IProps {
  navigation?: any;
  mode?: IMode;
  text?: string;
  to?: string;
  step?: number;
}
export interface IContainer {
  mode?: IMode;
}
