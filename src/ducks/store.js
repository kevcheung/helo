import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducer';

const combinedReducers = combineReducers({
    user: reducer
});

const store = createStore(
    combinedReducers,
    applyMiddleware(promiseMiddleware())
  );
  
  export default store;
  