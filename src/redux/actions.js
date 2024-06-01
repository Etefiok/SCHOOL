import axios from 'axios';
import { FaCheck, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";


export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_IDNUMBER = 'SET_IDNUMBER';
export const SET_PASSWORD = 'SET_PASSWORD';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SET_FIRSTNAME = 'SET_FIRSTNAME';
export const SET_LASTNAME = 'SET_LASTNAME';
export const SET_CONFIRMPASSWORD = 'SET_CONFIRMPASSWORD';
export const SET_PHONENUMBER = 'SET_PHONENUMBER';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_ERRORMESSAGE = 'SET_ERRORMESSAGE';


  const initialState = {
    Username: '',
    Firstname: '',
    Lastname: '',
    Password: '',
    Confirmpassword: '',
    IDnumber: '',
    Phonenumber: '',
    Email: '',
    errorMessage: '',
    loading: false,
    success: false,
  };
  



export const setUsername = (Username) => ({
type: SET_USERNAME,
payload: Username,
});

export const setIdnumber = (IDnumber) => ({
type: SET_IDNUMBER,
payload: IDnumber,
});

export const setPassword = (Password) => ({
type: SET_PASSWORD,
payload: Password,
});

export const loginRequest = () => ({
    type: LOGIN_REQUEST,
  });
  
  export const loginSuccess = (user, token) => ({
    type: LOGIN_SUCCESS,
    payload: { user, token },
  });
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });

export const setFirstname = (Firstname) => ({
type: SET_FIRSTNAME,
payload: Firstname,
});

export const setLastname = (Lastname) => ({
type: SET_LASTNAME,
payload: Lastname,
});

export const setConfirmpassword = (Confirmpassword) => ({
type: SET_CONFIRMPASSWORD,
payload: Confirmpassword,
});

export const setPhonenumber = (Phonenumber) => ({
type: SET_PHONENUMBER,
payload: Phonenumber,
});

export const setEmail = (Email) => ({
type: SET_EMAIL,
payload: Email,
});

export const setErrorMessage = (errorMessage) => ({
type: SET_ERRORMESSAGE,
payload: errorMessage,
});

export const signUpRequest = () => ({
    type: SIGN_UP_REQUEST,
  });
  
  export const signUpSuccess = () => ({
    type: SIGN_UP_SUCCESS,
  });
  
  export const signUpFailure = (errorMessage) => ({
    type: SIGN_UP_FAILURE,
    payload: errorMessage,
  });


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
        return { ...state, Confirmpassword: action.payload };
      case SET_IDNUMBER:
        return { ...state, IDnumber: action.payload };
      case SET_PHONENUMBER:
        return { ...state, Phonenumber: action.payload };
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
        return { ...state, IDnumber: action.payload };
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
  
  export const signUp = (formData) => {
    return async (dispatch) => {
      try {
        dispatch(signUpRequest());
        const response = await axios.post('http://localhost:5000/auth/signup', formData);
        if (response.data.message === 'User already exists') {
          dispatch(
            signUpFailure(
              <span className="Login-Error-Message">
                <FaTimes /> &nbsp; &nbsp; User already exists
              </span>
            )
          );
        } else {
          dispatch(
            signUpSuccess(
              <span className="Login-successfull">
                <FaCheck /> &nbsp; &nbsp; Sign Up Successful ...
              </span>
            )
          );
          
        }
      } catch (error) {
        dispatch(
          signUpFailure(
            <span className="Login-Error-Message">
              An error occurred while processing your request
            </span>
          )
        );
        console.error(error);
      }
    };
  };


  
  export const login = (formData) => {
    return async (dispatch) => {
      try {
        dispatch(loginRequest());
        const response = await axios.post('http://localhost:5000/auth/login', formData);
        if (response.data.error) {
          dispatch(loginFailure(response.data.error));
        } else {
          dispatch(loginSuccess(response.data.user, response.data.token));
        }
      } catch (error) {
        dispatch(loginFailure('An error occurred while processing your request'));
        console.error(error);
      }
    };
  };
  