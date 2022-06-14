import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isReady: false,
};

const STORE_NAME = '@app';

export const appStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
    resetState: () => initialState,
  },
});

export const appReducer = appStore.reducer;
export const appActions = appStore.actions;
