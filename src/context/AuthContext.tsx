import React, { createContext, useCallback, useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FourLeavesAPI from '../apis/FourLeaves';
import { isWebPlatform } from '../constants';

type User = {
  user_id: string;
  user_name: string;
  picture_url: string;
};

type AuthState = {
  user: User;
  token: string;
};

type AuthContextData = AuthState & {
  handleSignIn(data: AuthState): void;
  isReadyToNavigate: boolean;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthContextData);
  const [isReadyToNavigate, setIsReadyToNavigate] = useState<boolean>(false);
  const [
    isAuthenticatingOnMobileDevice,
    setIsAuthenticatingOnMobileDevice,
  ] = useState(false);

  const getTokenFromActualUrl = useCallback((): string | null => {
    const query = new URLSearchParams(window?.location?.search);
    const token: string | null = query.get('token');

    return token;
  }, []);

  const finishAuthentication = useCallback(
    async (param: string | any): Promise<void> => {
      const token = !isWebPlatform ? param.nativeEvent.data : param;

      AsyncStorage.setItem('token', token);

      const user = await FourLeavesAPI.getUserInfoByStoredToken();

      setAuthData({
        token,
        user,
      });

      if (!isWebPlatform) {
        setIsAuthenticatingOnMobileDevice(false);
      }

      setIsReadyToNavigate(true);
    },
    [],
  );

  const handleSignIn = useCallback(() => {
    if (isWebPlatform) {
      FourLeavesAPI.signInWeb();
    } else {
      setIsAuthenticatingOnMobileDevice(true);
    }
  }, []);

  useEffect(() => {
    if (isWebPlatform) {
      const token = getTokenFromActualUrl();
      if (!token) return;

      finishAuthentication(token);
      // TODO adicionar loading enquanto existir o ?token na url e remover assim que executar esse finish, tratar mobile quando webview is open também
    }
  }, [finishAuthentication, getTokenFromActualUrl]);

  if (isAuthenticatingOnMobileDevice) {
    return (
      <WebView
        source={{
          uri: FourLeavesAPI.getFacebookLoginURL(),
        }}
        onMessage={finishAuthentication}
      />
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user: authData.user,
        token: authData.token,
        isReadyToNavigate,
        handleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
