import axios, { AxiosInstance } from 'axios';

import { AsyncStorage, Platform } from 'react-native';
import { FacebookConfig } from '../configs';

class FourLeaves {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }

  async configureTokenToRequest(): Promise<void> {
    const token = await AsyncStorage.getItem('token');

    this.axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  async getUserInfoByStoredToken(): Promise<{
    user_name: string;
    picture_url: string;
    user_id: string;
  }> {
    await this.configureTokenToRequest();

    const { data: user } = await this.axios.get<{
      user_name: string;
      user_id: string;
      picture_url: string;
    }>('/facebook/sessions/me');

    return user;
  }

  getFacebookLoginURL(): string {
    const baseURL = `https://www.facebook.com/${FacebookConfig.apiVersion}/dialog/oauth?`;
    const clientId = `client_id=${FacebookConfig.appId}`;
    const redirectURI = `&redirect_uri=${FacebookConfig.redirectURI}`;

    const stateString = JSON.stringify({
      st: 'state123abc',
      ds: 123456789,
      platform: Platform.OS,
    });

    const state = `&state=${stateString}`;

    return baseURL + clientId + redirectURI + state;
  }

  signInWeb(): void {
    const redirectURL = this.getFacebookLoginURL();

    window.location.href = redirectURL;
  }
}

export default new FourLeaves();
