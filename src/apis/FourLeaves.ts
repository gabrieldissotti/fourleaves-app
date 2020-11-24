import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Platform } from 'react-native';
import { FacebookConfig } from '../configs';

type Page = {
  id: string;
  name: string;
  thumbnail: string;
  likes: number;
  posts: Array<{
    id: string;
    message: string;
    created_time: Date;
    likes: number;
    comments: number;
    shares: number;
  }>;
};

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

  async getPagesWithPosts(): Promise<Page[]> {
    await this.configureTokenToRequest();

    const { data: pages } = await this.axios.get<Page[]>('/facebook/pages');

    return pages;
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

    const permissions = [
      'email',
      'user_photos',
      'user_friends',
      'pages_show_list',
      'public_profile',
      'pages_manage_posts',
      'pages_manage_instant_articles',
      'pages_read_engagement',
      'pages_read_user_content',
    ];

    const state = `&state=${stateString}`;
    const scope = `&scope=${permissions.join(',')}`;

    return baseURL + clientId + redirectURI + state + scope;
  }

  signInWeb(): void {
    const redirectURL = this.getFacebookLoginURL();

    window.location.href = redirectURL;
  }

  async raffleAUserByPostAndRequirements(
    postId: string,
    requirements: string[],
  ): Promise<{
    winner: {
      id: string;
      name: string;
      pictureUrl: string;
      profileLink?: string;
    };
    statistics: {
      ranked_users_amount: number;
    };
  }> {
    await this.configureTokenToRequest();

    const { data: response } = await this.axios.post<{
      winner: {
        id: string;
        name: string;
        pictureUrl: string;
        profileLink?: string;
      };
      statistics: {
        ranked_users_amount: number;
      };
    }>('/facebook/raffle', { postId, requirements });

    return response;
  }
}

export default new FourLeaves();
