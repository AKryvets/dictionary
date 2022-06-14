import wretchInstance from 'wretch';

import { PathNames } from '../../consts';
import { getAccessToken, history, setAccessToken } from '../../packages/utils';

export const wretch = (url) => {
  const token = getAccessToken();

  let instance = wretchInstance(`${url}`);

  if (!url.includes('http')) {
    instance = wretchInstance(`/api/${url}`);
  }

  if (token) {
    instance = instance.auth(`Bearer ${token}`);
  }

  return instance.catcher(401, (error) => {
    setAccessToken('');

    history.push({ pathname: PathNames.auth });

    throw error;
  });
};
