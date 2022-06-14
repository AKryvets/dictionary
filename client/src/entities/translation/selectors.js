import { initialState } from './store';
import {translateReducerNamespace} from './consts';

const getTranslateData = (state) =>
  state[translateReducerNamespace] || initialState;

export const translateSelectors = {
  getTranslateData,
};
