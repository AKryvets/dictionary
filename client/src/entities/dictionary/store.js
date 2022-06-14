import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isReady: false,
  allDictionary: [],
  dictionary: null,
  allWords: [],
};

const STORE_NAME = '@dictionary';

export const dictionaryStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
    setAllDictionary(state, action) {
      state.allDictionary = action.payload;
    },
    setDictionary(state, action) {
      state.dictionary = action.payload;
    },
    setAllWords(state, action) {
      state.allWords = action.payload;
    },
    resetState: () => initialState,
  },
});

export const dictionaryReducer = dictionaryStore.reducer;
export const dictionaryActions = dictionaryStore.actions;
