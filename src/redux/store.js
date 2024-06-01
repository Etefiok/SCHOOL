import { createStore, applyMiddleware, compose } from 'redux';
import {thunk, withExtraArgument} from 'redux-thunk';
import SchoolReducer from './SchoolReducer';


// const { signUpReducer, loginReducer } = reducer;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(SchoolReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;