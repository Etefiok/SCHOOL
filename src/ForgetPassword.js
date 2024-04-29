import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import NavBar_out from './NavBar_out';
import Axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/auth/forgot-password", { email })
      .then(response => {
        if (response.data.status) {
          alert("Check your email for the reset password link");
          Navigate("/Login_Student");
        }
      })
      .catch(err => {
        console.log(err);
      });
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
                123 Any Street Scottsdale, AZ, 85251
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
        <form onSubmit={handleSubmit} className="form">
            <div className="newaccounttext"><br></br>
              <h5>Forgot Password</h5>
            </div><br></br>

            <div className="form-group">
              <input
                type="email"
                value={email}
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

            <label htmlFor="email">Email</label>
            </div>
            <div className="center-btn">
              <button className="btn">send</button>
            </div>

            <div className="Alreadyhaveaccount">
              <Link to="/Login_Student">Already have an account?</Link>
            </div>

        </form>

      </div>
    </div>
    </div>
  );
};

export default ForgetPassword
