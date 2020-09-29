export type IMode = 'default' | 'newRaffle' | 'share' | 'wizard';

export type Props = {
  navigation?: any;
  mode?: IMode;
  text?: string;
  to?: string;
  step?: number;
  onPress?: any;
};
export interface IContainer {
  mode?: IMode;
}
