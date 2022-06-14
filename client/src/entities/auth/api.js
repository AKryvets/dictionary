import { wretch } from '../app';

const signIn = (requestModel) =>
  wretch('auth/login/').post(requestModel).json();

const register = (requestModel) =>
  wretch('auth/register/').post(requestModel).json();

const getUser = () => wretch('user/profile/').get().json();

export const authApi = {
  signIn,
  register,
  getUser,
};
