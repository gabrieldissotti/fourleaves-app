export const FacebookConfig = {
  appId: __DEV__ ? 2684808968425884 : 378481756709522,
  apiVersion: 'v8.0',
  redirectURI: __DEV__
    ? 'http://localhost:3333/facebook/sessions/'
    : 'https://api.sorteiu.com/facebook/sessions/',
};

export const links = {
  privacy_policy:
    'https://docs.google.com/document/d/1-rB_6C7guV3K_c95GR5g5vsCyzAqBjztBTJNG4rj-CU/edit?usp=sharing',
  terms_of_service:
    'https://docs.google.com/document/d/1A12b9gqPzI3lZmxhwVwUn3uCGzZ8fsvDkOssX1tGH6E/edit?usp=sharing',
  how_it_works:
    'https://docs.google.com/document/d/17fxEC7TZsxw8DxwxJ4AYhsl7JbQ7IaP0m7-H4Y_dZao/edit?usp=sharing',
  contact_email: 'gabrieldnrodrigues@gmail.com',
};

export const share_app = {
  message:
    'Olha esse app, muito bom pra sortear no facebook: https://fourleav.es',
  title: 'fourleav.es',
  url: 'https://fourleav.es',
};
