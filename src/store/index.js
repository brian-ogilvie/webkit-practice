import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

const middleware =
  process.env.NODE_ENV === 'production' ? [thunk] : [thunk, createLogger()];

const composeEnhancer =
  process.env.NODE_ENV === 'production'
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancer(applyMiddleware(...middleware))
);
