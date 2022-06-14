import { appReducer, appReducerNamespace } from './entities/app';
import { modalReducer, modalReducerNamespace } from './packages/modal';
import { authReducer, authReducerNamespace } from './entities/auth';
import {
  dictionaryReducer,
  dictionaryReducerNamespace,
} from './entities/dictionary';
import {
  translateReducer,
  translateReducerNamespace,
} from './entities/translation';

export const rootReducer = {
  [appReducerNamespace]: appReducer,
  [authReducerNamespace]: authReducer,
  [dictionaryReducerNamespace]: dictionaryReducer,
  [modalReducerNamespace]: modalReducer,
  [translateReducerNamespace]: translateReducer,
};
