import { NotificationManager } from 'react-notifications';

import { PathNames } from '../../consts';

import { history, setAccessToken } from '../../packages/utils';

import { appActions, appService } from '../app';

import { authApi } from './api';

import { authActions } from './store';
import {dictionaryService} from '../dictionary';

const getUser = () => async (dispatch) => {
  try {
    const user = await authApi.getUser();

    console.log(user);
    await dispatch(authActions.setUser(user));
  } catch (e) {
    console.error(e);
  }
};

const signIn = (formModel) => async (dispatch) => {
  try {
    dispatch(authActions.setIsLoading(true));

    const { accessToken } = await authApi.signIn(formModel);

    setAccessToken(accessToken);

    await dispatch(getUser());
    await dispatch(dictionaryService.getAllDictionaries());

    NotificationManager.success('Successfully authenticated');

    history.push({
      pathname: PathNames.home,
    });
  } catch (e) {
    NotificationManager.error(JSON.parse(e.message).message);
    console.error(e);
  } finally {
    dispatch(authActions.setIsLoading(false));
  }
};

const register = (formModel) => async (dispatch) => {
  try {
    dispatch(authActions.setIsLoading(true));

    await authApi.register(formModel);

    dispatch(signIn({ email: formModel.email, password: formModel.password }));
  } catch (e) {
    NotificationManager.error(JSON.parse(e.message).message);
    console.error(e);
  } finally {
    dispatch(authActions.setIsLoading(false));
  }
};

const logout = () => async (dispatch) => {
  try {
    setAccessToken('');

    dispatch(appActions.resetSate());
    dispatch(authActions.resetState());

    history.push({ pathname: PathNames.auth });
  } catch (e) {
    console.error(e);
  }
};

export const authService = {
  signIn,
  logout,
  gerUser: getUser,
  register,
};
