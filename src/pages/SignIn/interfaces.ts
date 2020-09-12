export interface IProps {
  navigation: any;
}

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
  };
};
