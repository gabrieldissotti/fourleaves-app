import { FacebookConfig } from '../../../configs';

export function handleSignIn(): void {
  // TODO handle with webview for native

  const baseURL = `https://www.facebook.com/${FacebookConfig.apiVersion}/dialog/oauth?`;
  const clientId = `client_id=${FacebookConfig.appId}`;
  const redirectURI = `&redirect_uri=${FacebookConfig.redirectURI}`;
  const state = `&state="{st=state123abc,ds=123456789}"`;

  const redirectURL = baseURL + clientId + redirectURI + state;

  window.location.href = redirectURL;
}
