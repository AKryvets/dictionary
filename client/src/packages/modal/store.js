import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const STORE_NAME = '@modal';

export const modalStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setModalIsOpen: (state, action) => {
      const { name, isOpen } = action.payload;
      state[name] = {
        ...state[name],
        isOpen,
      };
    },
    setModalData: (state, action) => {
      const { name, data } = action.payload;
      state[name] = {
        ...state[name],
        data,
      };
    },
    resetState: () => initialState,
  },
});

export const modalActions = { ...modalStore.actions };
export const modalReducer = modalStore.reducer;
