import {
    SET_USERNAME,
    SET_IDNUMBER,
    SET_PASSWORD,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SET_FIRSTNAME,
    SET_LASTNAME,
    SET_CONFIRMPASSWORD,
    SET_PHONENUMBER,
    SET_EMAIL,
    SET_ERRORMESSAGE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
  } from './actions';
  
  const initialState = {
    Username: '',
    IDnumber: '',
    Password: '',
    loading: false,
    token: null,
    error: null,
    Firstname: '',
    Lastname: '',
    Confirmpassword: '',
    Phonepumber: '',
    Email: '',
    errorMessage: '',
    user: null,
  };
  
  const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERNAME:
        return { ...state, Username: action.payload };
      case SET_FIRSTNAME:
        return { ...state, Firstname: action.payload };
      case SET_LASTNAME:
        return { ...state, Lastname: action.payload };
      case SET_PASSWORD:
        return { ...state, Password: action.payload };
      case SET_CONFIRMPASSWORD:
        return { ...state, ConfirmPassword: action.payload };
      case SET_IDNUMBER:
        return { ...state, IDNumber: action.payload };
      case SET_PHONENUMBER:
        return { ...state, PhoneNumber: action.payload };
      case SET_EMAIL:
        return { ...state, Email: action.payload };
      case SET_ERRORMESSAGE:
        return { ...state, errorMessage: action.payload };
      case SIGN_UP_REQUEST:
        return { ...state, loading: true, errorMessage: '' };
      case SIGN_UP_SUCCESS:
        return { ...state, loading: false, success: true, errorMessage: '' };
      case SIGN_UP_FAILURE:
        return { ...state, loading: false, errorMessage: action.payload };
      default:
        return state;
    }
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERNAME:
        return { ...state, Username: action.payload };
      case SET_IDNUMBER:
        return { ...state, IDNumber: action.payload };
      case SET_PASSWORD:
        return { ...state, Password: action.payload };
      case LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
      case LOGIN_SUCCESS:
        return { ...state, loading: false, token: action.payload.token, error: null, user: action.payload.user };
      case LOGIN_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  const reducer = {
    signUpReducer,
    loginReducer,
  };
  
  export default reducer;
  