export type IMode = 'default' | 'newRaffle' | 'share' | 'wizard';

export type Props = {
  navigation?: any;
  mode?: IMode;
  text?: string;
  isDisabled?: boolean;
  to?: string;
  step?: number;
  onPress?: any;
};
export interface IContainer {
  mode?: IMode;
  isDisabled: boolean;
}
