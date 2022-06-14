import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
  user: false,
};

const STORE_NAME = '@auth';

export const authStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetState: () => initialState,
  },
});

export const authReducer = authStore.reducer;
export const authActions = authStore.actions;
