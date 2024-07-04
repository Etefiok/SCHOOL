// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './SchoolReducer'; // Adjust this path if necessary

const middleware = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;