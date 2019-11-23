import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
});

const rootReducer = combineReducers({})
const store = createStore(rootReducer, applyMiddleware(...[thunk, logger]));

export default store;