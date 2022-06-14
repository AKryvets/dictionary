import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isReady: false,
  languages: [],
  result: '',
};

const STORE_NAME = '@translate';

export const translateStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
    setLanguages(state, action) {
      state.languages = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
    resetState: () => initialState,
  },
});

export const translateReducer = translateStore.reducer;
export const translateActions = translateStore.actions;
