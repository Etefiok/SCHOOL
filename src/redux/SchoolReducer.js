import { combineReducers } from 'redux';
import reducer from './Reducer';

const rootReducer = combineReducers({
  login: reducer.loginReducer,
  signUp: reducer.signUpReducer,
  auth: reducer.authReducer,
  // other reducers...
});

export default rootReducer;


