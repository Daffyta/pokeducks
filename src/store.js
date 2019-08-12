import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux';
import {  createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './store/index';
import { rootEpic } from './epics';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;


const epicMiddleware = createEpicMiddleware();

export const history = createBrowserHistory();

const middleware = [
  routerMiddleware(history),
  epicMiddleware
];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

export const store = createStore(
  rootReducer(history),
  enhancer
);

epicMiddleware.run(rootEpic);
