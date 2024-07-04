import axios from "axios";
import Cookies from 'js-cookie';
import { draftToHtml, convertToRaw } from 'draft-js';





// Action types
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

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const POST_QUESTIONS_REQUEST = 'POST_QUESTIONS_REQUEST';
export const POST_QUESTIONS_SUCCESS = 'POST_QUESTIONS_SUCCESS';
export const POST_QUESTIONS_FAILURE = 'POST_QUESTIONS_FAILURE';

export const FETCH_SESSION_REQUEST = 'FETCH_SESSION_REQUEST';
export const FETCH_SESSION_SUCCESS = 'FETCH_SESSION_SUCCESS';
export const FETCH_SESSION_FAILURE = 'FETCH_SESSION_FAILURE';

export const POST_MATHS_QUESTIONS_REQUEST = 'POST_MATHS_QUESTIONS_REQUEST';
export const POST_MATHS_QUESTIONS_SUCCESS = 'POST_MATHS_QUESTIONS_SUCCESS';
export const POST_MATHS_QUESTIONS_FAILURE = 'POST_MATHS_QUESTIONS_FAILURE';

export const FETCH_MATHS_SESSION_REQUEST = 'FETCH_MATHS_SESSION_REQUEST';
export const FETCH_MATHS_SESSION_SUCCESS = 'FETCH_MATHS_SESSION_SUCCESS';
export const FETCH_MATHS_SESSION_FAILURE = 'FETCH_MATHS_SESSION_FAILURE';

// export const FETCH_USER_DETAILS_REQUEST = 'FETCH_USER_DETAILS_REQUEST';
// export const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS';
// export const FETCH_USER_DETAILS_FAILURE = 'FETCH_USER_DETAILS_FAILURE';

// Action creators
export const setUsername = (username) => ({
type: SET_USERNAME,
payload: username,
});

export const setIdnumber = (idnumber) => ({
type: SET_IDNUMBER,
payload: idnumber,
});

export const setPassword = (password) => ({
type: SET_PASSWORD,
payload: password,
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

export const loginIncorrectUsername = () => ({
  type: LOGIN_FAILURE,
  payload: "Incorrect username",
});

export const loginIncorrectIdNumber = () => ({
  type: LOGIN_FAILURE,
  payload: "Incorrect ID number",
});

export const loginIncorrectPassword = () => ({
  type: LOGIN_FAILURE,
  payload: "Incorrect password",
});

export const loginGenericFailure = (errorMessage) => ({
  type: LOGIN_FAILURE,
  payload: errorMessage,
});


export const setFirstname = (firstname) => ({
type: SET_FIRSTNAME,
payload: firstname,
});

export const setLastname = (lastname) => ({
type: SET_LASTNAME,
payload: lastname,
});

export const setConfirmpassword = (confirmpassword) => ({
type: SET_CONFIRMPASSWORD,
payload: confirmpassword,
});

export const setPhonenumber = (phonenumber) => ({
type: SET_PHONENUMBER,
payload: phonenumber,
});

export const setEmail = (email) => ({
type: SET_EMAIL,
payload: email,
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


export const postQuestionsRequest = () => ({
  type: POST_QUESTIONS_REQUEST,
});

export const postQuestionsSuccess = () => ({
  type: POST_QUESTIONS_SUCCESS,
});

export const postQuestionsFailure = (errorMessage) => ({
  type: POST_QUESTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchSessionRequest = () => ({
  type: FETCH_SESSION_REQUEST,
});

export const fetchSessionSuccess = (sessionDetails) => ({
  type: FETCH_SESSION_SUCCESS,
  payload: sessionDetails,
});

export const fetchSessionFailure = (errorMessage) => ({
  type: FETCH_SESSION_FAILURE,
  payload: errorMessage,
});

export const postMathsQuestionsRequest = () => ({
  type: POST_MATHS_QUESTIONS_REQUEST,
});

export const postMathsQuestionsSuccess = () => ({
  type: POST_MATHS_QUESTIONS_SUCCESS,
});

export const postMathsQuestionsFailure = (errorMessage) => ({
  type: POST_MATHS_QUESTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchMathsSessionRequest = () => ({
  type: FETCH_MATHS_SESSION_REQUEST,
});

export const fetchMathsSessionSuccess = (sessionDetails) => ({
  type: FETCH_MATHS_SESSION_SUCCESS,
  payload: sessionDetails,
});

export const fetchMathsSessionFailure = (errorMessage) => ({
  type: FETCH_MATHS_SESSION_FAILURE,
  payload: errorMessage,
});

// export const fetchUserDetailsRequest = () => ({
//   type: FETCH_USER_DETAILS_REQUEST,
// });

// export const fetchUserDetailsSuccess = (userDetails) => ({
//   type: FETCH_USER_DETAILS_SUCCESS,
//   payload: userDetails,
// });

// export const fetchUserDetailsFailure = (errorMessage) => ({
//   type: FETCH_USER_DETAILS_FAILURE,
//   payload: errorMessage,
// });


// Async action for signing up
export const signUp = (formData) => {
return async (dispatch) => {
try {
dispatch(signUpRequest());
const response = await axios.post('http://localhost:5000/auth/signup', formData);
if (response.data.message === 'User already exists') {
dispatch(signUpFailure("User already exists"));
} else {
dispatch(signUpSuccess());
}
} catch (error) {
dispatch(signUpFailure("An error occurred while processing your request"));
console.error(error);
}
};
};



export const login = (formData, navigate) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post('http://localhost:5000/auth/login', formData);
      if (response.data.message === 'Login successful') {
        const { user, token } = response.data;
        dispatch(loginSuccess(user, token));
        Cookies.set('token', token);
        Cookies.set('user', JSON.stringify(user));
        navigate('/Homepage_Student');
      } else {
        // Extract error message from response data
        const errorMessage = response.data.message || "An error occurred while logging in";

        // Check specific error messages and dispatch appropriate failure actions
        if (errorMessage === 'Incorrect username') {
          dispatch(loginIncorrectUsername());
        } else if (errorMessage === 'Incorrect ID number') {
          dispatch(loginIncorrectIdNumber());
        } else if (errorMessage === 'Incorrect password') {
          dispatch(loginIncorrectPassword());
        } else {
          dispatch(loginGenericFailure(errorMessage));
        }
      }
    } catch (error) {
      // Handle different types of errors (e.g., network error, server error)
      if (error.response) {
        // Server responded with a status code outside the range of 2xx
        // Extract error message from response data if available
        const errorMessage = error.response.data.message || "An error occurred while logging in";
        dispatch(loginGenericFailure(errorMessage));
      } else if (error.request) {
        // Request was made but no response received
        dispatch(loginGenericFailure("No response received. Please check your internet connection."));
      } else {
        // Something happened in setting up the request that triggered an error
        dispatch(loginGenericFailure("An error occurred while logging in. Please try again later."));
      }

      console.error(error);
    }
  };
};



export const verifyUser = (navigate) => async () => {
  try {
    const token = Cookies.get('token');
    console.log('Token retrieved:', token); // Log token for debugging

    if (!token) {
      console.log('No token found, redirecting to /Login_Student');
      navigate('/Login_Student');
      return;
    }

    const response = await axios.get('http://localhost:5000/auth/verify?page=Subjects_For_Exams', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Server response:', response.data); // Log server response for debugging

    if (response.data.status === true) {
      navigate('/Subjects_For_Exams');
    } else {
      navigate('/Login_Student');
    }
  } catch (error) {
    console.error('Error verifying user:', error);
    if (error.response) {
      console.error('Server response:', error.response.data);
    }
    navigate('/Login_Student');
  }
};

export const jss1econssessionPost = (formData) => {
  return async (dispatch) => {
    dispatch(postQuestionsRequest());
    try {
      const response = await axios.post('http://localhost:5000/auth/jss1econssession', formData);
      dispatch(postQuestionsSuccess());
      console.log('Questions posted successfully:', response.data);
    } catch (error) {
      dispatch(postQuestionsFailure("Failed to post questions. Please try again later."));
      console.error('Error posting questions:', error);
    }
  };
};


// // Function to upload file to server and get URL
// export const jss1econssessionPost = async (file, e) => {
// //  e.preventDefault();
//   try {
//     // Use axios or fetch to upload file and get the URL from backend
//     const formData = new FormData();
//     formData.append('file', file);

//     const response = await axios.post('http://localhost:5000/auth/jss1econssession', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     return response.data.url; // Assuming backend returns the URL
//   } catch (error) {
//     console.error('Error uploading file to server:', error);
//     throw error;
//   }
// };


export const fetchSessionDetails = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchSessionRequest());
      const response = await axios.get('http://localhost:5000/auth/jss1econssession/details'); // Adjust the URL as per your backend API
      dispatch(fetchSessionSuccess(response.data)); // Assuming response.data contains session details
    } catch (error) {
      dispatch(fetchSessionFailure("Failed to fetch session details. Please try again later."));
      console.error('Error fetching session details:', error);
    }
  };
};


export const jss1MathsSessionPost = (formData) => {
  return async (dispatch) => {
    dispatch(postMathsQuestionsRequest());
    try {
      const response = await axios.post('http://localhost:5000/auth/jss1MathsSession', formData);
      dispatch(postMathsQuestionsSuccess());
      console.log('Questions posted successfully:', response.data);

     // Save session details to cookies
      // Cookies.set('sessionDetails', JSON.stringify(response.data.sessionDetails));

      // Optionally, you can dispatch an action to update state or handle success feedback
    } catch (error) {
      dispatch(postMathsQuestionsFailure("Failed to post questions. Please try again later."));
      console.error('Error posting questions:', error);
    }
  };
};


export const fetchMathsSessionDetails = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchMathsSessionRequest());
      const response = await axios.get('http://localhost:5000/auth/jss1MathsSession/details'); // Adjust the URL as per your backend API
      dispatch(fetchMathsSessionSuccess(response.data)); // Assuming response.data contains session details
    } catch (error) {
      dispatch(fetchMathsSessionFailure("Failed to fetch session details. Please try again later."));
      console.error('Error fetching session details:', error);
    }
  };
};

