import { initialState } from './store';
import { dictionaryReducerNamespace } from './consts';

const getDictionaryData = (state) =>
  state[dictionaryReducerNamespace] || initialState;

const getIsReady = (state) => getDictionaryData(state).isReady;

const getAllDictionaries = (state) => getDictionaryData(state).allDictionary;

const getDictionary = (state) => getDictionaryData(state)?.dictionary;

const getAllWords = (state) => getDictionaryData(state)?.allWords;

export const dictionarySelectors = {
  getIsReady,
  getDictionary,
  getDictionaryData,
  getAllDictionaries,
  getAllWords,
};
