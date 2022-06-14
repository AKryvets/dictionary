import { authService } from '../auth';

import { history } from '../../packages/utils';
import { PathNames } from '../../consts';

import { dictionaryService } from '../dictionary';

import { appActions } from './store';

const init = () => async (dispatch) => {
  try {
    dispatch(appActions.setIsReady(true));

    await dispatch(authService.gerUser());
    await dispatch(dictionaryService.getAllDictionaries());
  } catch (e) {
    console.error(e);
    history.push({
      pathname: PathNames.home,
    });
  }
};

export const appService = {
  init,
};
