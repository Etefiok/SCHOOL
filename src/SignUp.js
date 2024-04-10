import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import NavBar_out from './NavBar_out';
import axios from "axios";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/register', { firstName, password, confirmPassword })
      .then(result => {
        console.log(result);
        // Optionally, you can redirect the user to the login page after successful registration
        navigate("/LoginForExams");
      })
      .catch(err => console.log(err));
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
                <h3 >Create a new account</h3>
                <p>it's quick and easy</p>
 
            <input 
            type="text" 
            id="" 
            placeholder="First name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="Firstname">First name</label>

            <input 
            type="text" 
            id="" 
            placeholder="Lastname"
            />
            <label htmlFor="Lastname">Lastname</label>

          
            <input 
            type="text" 
            id="" 
            placeholder="ID Number" 
            />
            <label htmlFor="ID Number">ID Number</label>
 
            <input 
            type="Number" 
            id="" 
            placeholder="Phone Number" 
            />
            <label htmlFor="Phone Number">Phone Number</label>

          <input 
          type="text" 
          id="" 
          placeholder="Role" 
          />
            <label htmlFor="Phone Number">Role</label>
 
            <input 
            type="text" 
            id="" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="Password">Password</label>

          <input 
          type="text" 
          id="" 
          placeholder="Confirm Pasword" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} 
          />
            <label htmlFor="Password">Confirm Pasword</label>
          
              <div className="center-btn">
                <button type="submit" >Register</button>
              </div>
             
              <div className="Alreadyhaveaccount">
                  <p>Already have an account? <a href="http://localhost:3000/Login_Student">Login</a></p>
              </div>
          </div>
        </form>

    </div>
  </div>
</div>
   
  );
};

export default SignUp


// onClick={loginuser}