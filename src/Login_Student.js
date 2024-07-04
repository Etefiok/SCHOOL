import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Loginforpage.css";
import NavBar_Student from "./NavBar_out";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { connect } from "react-redux";
import { setUsername, setIdnumber, setPassword, loginRequest, loginSuccess, loginFailure, login } from "./redux/Actions.js"; // Update import statement
import { useDispatch, useSelector } from "react-redux";




const Login_Student = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.login); // Retrieve the login state
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const [Username, setUsername] = useState("");
  const [IDnumber, setIdnumber] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { Username, IDnumber, Password };
    dispatch(login(formData, navigate));
  };

  if (loginState.isLoggedIn) {
    return (
      <div>
        <NavBar_Student />
        <div className="Logiback">
          <div className="formcontain">
            <h2>Login</h2>
            <div className="alert-message success">
              <span className="Login-Success-Message">
                <FaTimes /> &nbsp; &nbsp; Login Successful
              </span>
            </div>
            <div className="forgetpassword">
              <button
                type="button"
                onClick={() => {
                  navigate("/Homepage_Student");
                }}
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar_Student />
      <div className="Logiback">
        <form onSubmit={handleSubmit} className="formcontain">
          <h2>Login</h2>
          {/* {errorMessage && (
            <div className="alert-message">
              <span className="Login-Error-Message">
                <FaTimes /> &nbsp; &nbsp; {errorMessage}
              </span>
            </div>
          )} */}

{loginState.error && (
            <div className="alert-message">
              <span className="Login-Error-Message">
                <FaTimes /> &nbsp; &nbsp; {loginState.error}
              </span>
            </div>
          )}

          <label className="label">
            Username
            <input
              className="blur"
              value={Username}
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* {errors.username && (
              <div className="error-message">{errors.username}</div>
            )} */}
          </label>
          <label className="label">
            ID number
            <input
              className="blur"
              value={IDnumber}
              type="number"
              placeholder="ID number"
              name="idnumber"
              onChange={(e) => setIdnumber(e.target.value)}
            />
            {/* {errors.idnumber && (
              <div className="error-message">{errors.idnumber}</div>
            )} */}
          </label>
          <label className="label">
            Password
            <div className="password-input">
              <input
                className="blur_password"
                value={Password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {errors.password && (
                <div className="error-message">{errors.password}</div>
              )} */}
              <span
                type="button"
                className="toggle-password-button"
                onClick={() =>
                  setShowPassword((prevShowPassword) => !prevShowPassword)
                }
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </label>

          <div className="sign">
            <button className="border1" type="submit">
              Login
            </button>
            <button
              className="border2"
              type="button"
              onClick={() => {
                window.location.href = "./forgetpassword";
              }}
            >
              <span>Forgot password?</span>
            </button>
          </div>
          <div className="forgetpassword">
            Don't have an account?
            <button
              type="button"
              onClick={() => {
                window.location.href = "./Signup";
              }}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  signUp: state.signUp,
  login: state.login,
  auth: state.authReducer,
});

const mapDispatchToProps = {
  setUsername,
  setIdnumber,
  setPassword,
  loginRequest,
  loginSuccess,
  loginFailure,
  login,
 
};

export default connect(mapStateToProps, mapDispatchToProps)(Login_Student);
