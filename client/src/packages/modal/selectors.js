import { modalReducerNamespace } from './consts';
import { initialState } from './store';

const getModalState = (state) => state[modalReducerNamespace] || initialState;

const getModalData = (state, name) => getModalState(state)[name]?.data;

const getModalIsOpen = (state, name) => !!getModalState(state)[name]?.isOpen;

export const modalSelectors = {
  getModalData,
  getModalIsOpen,
};
