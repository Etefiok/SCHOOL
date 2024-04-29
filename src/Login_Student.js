import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Loginforpage.css";
import NavBar_Student from "./NavBar_out";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FaEye, FaEyeSlash, FaTimes, FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';

const Login_Student = () => {
    const [user, setUser] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [Username, setUsername] = useState("");
    const [IDnumber, setIdnumber] = useState("");
    const [Password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
  
    const navigate = useNavigate();
  
    axios.defaults.withCredentials = true;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validate()) {
        try {
          const response = await axios.post("http://localhost:5000/auth/login", {
            Username: Username,
            IDnumber: IDnumber,
            Password: Password,
          });
          console.log({ response });
          if (response.data.message === 
            "Login successful") {
            console.log(response.data.token)
            Cookies.set('token', response.data.token);
            // localStorage.setItem('token', response.data.token);
            setAlertMessage(
              <span className="Login-successfull">
                <FaCheck /> &nbsp; &nbsp; Login Successful ...
              </span>
            );
            setTimeout(() => {
              console.log("success")
              navigate("/Homepage_Student");
            }, 1500);
          } else {
            setAlertMessage(
              <span className="Login-Error-Message">
                <FaTimes /> &nbsp; &nbsp; Incorrect crerdentials
              </span>
            );
          }
        } catch (err) {
          console.log(err);
          setAlertMessage(
            <span className="Login-Error-Message">
              <FaTimes /> &nbsp; &nbsp; An error occurred, please try again.
            </span>
          );
        }
      }
    };
    
      
      
  
    const validate = () => {
      let result = true;
      if (Password === "" || Password === null) {
        result = false;
        setAlertMessage(
          <span className="Login-Error-Message">
            <FaTimes /> &nbsp; &nbsp; Please enter a valid password
          </span>
        );
      }

      if (IDnumber === "" || IDnumber === null) {
        result = false;
        setAlertMessage(
          <span className="Login-Error-Message">
            <FaTimes /> &nbsp; &nbsp; Please enter a valid ID number
          </span>
        );
      }
  

      if (Username === "" || Username === false) {
        result = false;
        setAlertMessage(
          <span className="Login-Error-Message">
            <FaTimes /> &nbsp; &nbsp; Please enter a valid username
          </span>
        );
      }
  
      return result;
    };

  return (
    <div>
      <NavBar_Student />
      <div className="Logiback">
        <form onSubmit={handleSubmit} className="formcontain">
          <h2>Login</h2>
          <div className="alert-message">{alertMessage}</div>
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
}

export default Login_Student;
