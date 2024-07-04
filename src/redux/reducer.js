
import Cookies from 'js-cookie';
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
  POST_QUESTIONS_FAILURE,
  POST_QUESTIONS_SUCCESS,
  POST_QUESTIONS_REQUEST,
  FETCH_SESSION_FAILURE,
  FETCH_SESSION_REQUEST,
  FETCH_SESSION_SUCCESS,
  POST_MATHS_QUESTIONS_FAILURE,
  POST_MATHS_QUESTIONS_SUCCESS,
  POST_MATHS_QUESTIONS_REQUEST,
  FETCH_MATHS_SESSION_FAILURE,
  FETCH_MATHS_SESSION_REQUEST,
  FETCH_MATHS_SESSION_SUCCESS,
  // FETCH_USER_DETAILS_REQUEST,
  // FETCH_USER_DETAILS_SUCCESS,
  // FETCH_USER_DETAILS_FAILURE,
} from './Actions.js';



// Retrieve token and user data from cookies
const storedToken = Cookies.get('token') ?? null;
const storedUser = Cookies.get('user');
let initialStateUser = null;
try {
  initialStateUser = storedUser ? JSON.parse(storedUser) : null;
} catch (error) {
  console.error('Error parsing user data from cookie:', error);
}

// // Retrieve session details from cookies
// const storedSessionDetails = Cookies.get('sessionDetails');
// let initialStateSessionDetails = null;
// try {
//   initialStateSessionDetails = storedSessionDetails
//     ? JSON.parse(storedSessionDetails)
//     : null;
// } catch (error) {
//   console.error('Error parsing session details from cookie:', error);
// }


const initialState = {
  Username: '',
  IDnumber: '',
  Password: '',
  loading: false,
  error: null,
  Firstname: '',
  Lastname: '',
  Confirmpassword: '',
  Phonenumber: '',
  Email: '',
  errorMessage: '',
  user: initialStateUser,
  token: storedToken,
  isLoggedIn: storedToken ? true : false,
  // sessionDetails: null,
  signUpSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGN_UP_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        error: null,
        user: action.payload.user,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      if (action.payload === "Incorrect username") {
        return { ...state, loading: false, error: "Incorrect username" };
      } else if (action.payload === "Incorrect ID number") {
        return { ...state, loading: false, error: "Incorrect ID number" };
      } else if (action.payload === "Incorrect password") {
        return { ...state, loading: false, error: "Incorrect password" };
      } else {
        return { ...state, loading: false, error: action.payload };
      }
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, signUpSuccess: true };
      
      case POST_QUESTIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_QUESTIONS_SUCCESS:
      return { ...state, loading: false }; // Optionally handle success state update
    case POST_QUESTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };

      case FETCH_SESSION_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_SESSION_SUCCESS:
        return {
          ...state,
          loading: false,
          sessionDetails: action.payload,
          error: null,
        };
      case FETCH_SESSION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      

        case POST_MATHS_QUESTIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_MATHS_QUESTIONS_SUCCESS:
      return { ...state, loading: false }; // Optionally handle success state update
    case POST_MATHS_QUESTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };

      case FETCH_MATHS_SESSION_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_MATHS_SESSION_SUCCESS:
        return {
          ...state,
          loading: false,
          sessionDetails: action.payload,
          error: null,
        };
      case FETCH_MATHS_SESSION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

    //     case FETCH_USER_DETAILS_REQUEST:
    //   return { ...state, loading: true, error: null };
    // case FETCH_USER_DETAILS_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     user: action.payload.user,
    //     error: null,
    //   };
    // case FETCH_USER_DETAILS_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
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
      return { ...state, loading: false, signUpSuccess: true, errorMessage: '' };
    case SIGN_UP_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };

      case POST_QUESTIONS_REQUEST:
      return { ...state, loading: true, errorMessage: '' };
    case POST_QUESTIONS_SUCCESS:
      return { ...state, loading: false, errorMessage: '' }; // Optionally handle success state update
    case POST_QUESTIONS_FAILURE:
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
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        error: null,
        user: action.payload.user,
      };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };

      case POST_QUESTIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case POST_QUESTIONS_SUCCESS:
      return { ...state, loading: false }; // Optionally handle success state update
    case POST_QUESTIONS_FAILURE:
      return { ...state, loading: false, error: action.payload };

      case FETCH_SESSION_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_SESSION_SUCCESS:
        return {
          ...state,
          loading: false,
          sessionDetails: action.payload,
          error: null,
        };
      case FETCH_SESSION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        case POST_MATHS_QUESTIONS_REQUEST:
          return { ...state, loading: true, error: null };
        case POST_MATHS_QUESTIONS_SUCCESS:
          return { ...state, loading: false }; // Optionally handle success state update
        case POST_MATHS_QUESTIONS_FAILURE:
          return { ...state, loading: false, error: action.payload };
    
          case FETCH_MATHS_SESSION_REQUEST:
            return {
              ...state,
              loading: true,
              error: null,
            };
          case FETCH_MATHS_SESSION_SUCCESS:
            return {
              ...state,
              loading: false,
              sessionDetails: action.payload,
              error: null,
            };
          case FETCH_MATHS_SESSION_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
       
   
    default:
      return state;
  }
};






const reducer = {
  signUpReducer,
  loginReducer,
  authReducer,


};

export default reducer;