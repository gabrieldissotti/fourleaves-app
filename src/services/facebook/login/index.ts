import { Platform } from 'react-native';
import { FacebookConfig } from '../../../configs';

export function getFacebookLoginURL(): string {
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

export function handleSignWebIn(): void {
  // TODO handle with webview for native

  const redirectURL = getFacebookLoginURL();

  window.location.href = redirectURL;
}
