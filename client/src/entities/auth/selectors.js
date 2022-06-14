import { authReducerNamespace } from './consts';
import { initialState } from './store';

const getAuthData = (state) => state[authReducerNamespace] || initialState;

const getUser = (state) => getAuthData(state).user;

export const authSelectors = {
  getUser,
  getAuthData,
};
