export const FacebookConfig = {
  appId: process.env.REACT_APP_FACEBOOK_APP_ID,
  apiVersion: 'v8.0',
  redirectURI: `${process.env.REACT_APP_API_BASE_URL}/facebook/sessions/`,
};
