import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import NavBar_out from "./NavBar_out";
import { FaCheck, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import {
  setUsername,
  setFirstname,
  setLastname,
  setPassword,
  setConfirmpassword,
  setIdnumber,
  setPhonenumber,
  setEmail,
  setErrorMessage,
  signUp,
} from "./redux/actions";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    Username = "",
    Firstname = "",
    Lastname = "",
    Password = "",
    Confirmpassword = "",
    IDnumber = "",
    Phonenumber = "",
    Email = "",
    errorMessage = "",
    loading,
  } = useSelector((state) => state.loginReducer);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Password !== Confirmpassword) {
      dispatch(
        setErrorMessage(
          <span className="Login-Error-Message">
            <FaTimes /> &nbsp; &nbsp; Passwords do not match
          </span>
        )
      );
      return;
    }

    dispatch(
      signUp({
        Username,
        Firstname,
        Lastname,
        Password,
        Confirmpassword,
        IDnumber,
        Phonenumber,
        Email,
      })
    );
    setTimeout(() => {
      navigate('/Login_Student');
    }, 1500);
  };

  return (
    <div>
      <NavBar_out />

      <div className="page-container">
        <div className="contact-grid-wrapper">
          <div className="company-data-bar">
            <div className="comapny-logo-on-side">
              <img src={require("./images.jpg/schoollogo.jpeg")} alt="logo" />

              <div className="companydetails-contact-wrapper">
                <i className="fa fa-map-marker"></i>
                123 Any Street Scottersdale, az, 85251
              </div>

              <div className="companydetails-contact-wrapper">
                <i className="fas fa-phone-volume"></i>
                555 555 555
              </div>

              <div className="companydetails-contact-wrapper">
                <i className="fas fa-clock"></i>
                123 am
              </div>
            </div>
          </div>

          {/* Form section */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="newaccounttext">
              <h3>Create a new account</h3>
              <p>it's quick and easy</p>
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
              <input
                type="text"
                id=""
                placeholder="Username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="Username">Username</label>

              <input
                type="text"
                id=""
                placeholder="First name"
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />

              <label htmlFor="Firstname">First name</label>

              <input
                type="text"
                id=""
                placeholder="Lastname"
                value={Lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <label htmlFor="Lastname">Lastname</label>

              <input
                type="Number"
                id=""
                placeholder="ID Number"
                value={IDnumber}
                onChange={(e) => setIdnumber(e.target.value)}
              />
              <label htmlFor="ID Number">ID Number</label>

              <input
                type="Number"
                id=""
                placeholder="Phone Number"
                value={Phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <label htmlFor="Phone Number">Phone Number</label>

              <input
                type="Email"
                id=""
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="Email">Email</label>

              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id=""
                  placeholder="**********"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  type="button"
                  onClick={() =>
                    setShowPassword((prevShowPassword) => !prevShowPassword)
                  }
                  className="show-password-button"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <label htmlFor="Password">Password</label>

              <input
                type="text"
                id=""
                placeholder="**********"
                value={Confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                style={{ font: "black", WebkitTextSecurity: "disc" }}
              />
              <label htmlFor="Password">Confirm Password</label>

              <div className="center-btn">
                <button type="submit">Register</button>
              </div>

              <div className="Alreadyhaveaccount">
                <p>
                  Already have an account?{" "}
                  <Link to="/Login_Student">Login</Link>
                  {/* <a href="http://localhost:3000/Login_Student">Login</a> */}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// onClick={loginuser}
