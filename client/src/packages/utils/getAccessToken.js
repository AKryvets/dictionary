export const ACCESS_TOKEN = 'access';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const setAccessToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN, token);
};
