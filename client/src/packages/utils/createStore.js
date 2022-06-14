import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as reduxCreateStore,
} from 'redux';
import thunk from 'redux-thunk';

export const createStore = (reducers = {}, options = {}) => {
  const {
    persistedState = {},
    preMiddleware = [],
    postMiddleware = [],
  } = options;

  const middlewares = [...preMiddleware, ...postMiddleware, thunk];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedMiddleware = composeEnhancers(applyMiddleware(...middlewares));

  return reduxCreateStore(
    combineReducers({
      ...reducers,
    }),
    persistedState,
    composedMiddleware
  );
};
