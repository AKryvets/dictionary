import { appReducerNamespace } from './consts';
import { initialState } from './store';

const getAppData = (state) => state[appReducerNamespace] || initialState;

const getMenuItemById = (state, id) => {
  const { menuItems } = getAppData(state);

  return menuItems.find((menuItem) => String(menuItem.id) === String(id));
};

export const appSelectors = {
  getAppData,
  getMenuItemById,
};
