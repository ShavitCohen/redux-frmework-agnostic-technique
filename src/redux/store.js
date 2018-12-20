import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';

import { loggerMiddleware } from './core/logger.middleware';
import { actionSplitterMiddleware } from './core/actionSplitter.middleware';
import { apiMiddleware } from './core/api/api.middleware';
import { searchMiddleware } from './feature/search/search.middleware';
import { showInfoMiddleware } from './feature/showInfo/showInfo.middleware';

const coreMiddlewares = [
  actionSplitterMiddleware,
  apiMiddleware,
  loggerMiddleware,
];
const featureMiddlewares = [searchMiddleware, showInfoMiddleware];

const middlewares = [...coreMiddlewares, ...featureMiddlewares];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

const configureStore = () => createStore(reducer, enhancer);

export default configureStore;