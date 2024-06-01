import { combineReducers } from 'redux';
import reducer from "./reducer"

const SchoolReducer = combineReducers({
  signup: reducer.signUpReducer,
  login: reducer.loginReducer,
});

export default SchoolReducer;
