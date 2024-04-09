import React from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import Navba from './NavBar';
import NavBar_out from './NavBar_out';



function ForgetPassword () {

  
  const Navigate = useNavigate();

    function loginuser(){
        Navigate("/LoginForExams")
    
  }

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
        <div className="form">
            <div className="newaccounttext"><br></br>
                <h5>Reset Password</h5>
            </div>  <br></br>

          <div className="form-group">
          
            <input type="text" id="" placeholder="ID Number" />
            <label htmlFor="ID Number">ID Number</label>
          </div>

          <div className="form-group">
            <input type="Number" id="" placeholder="Phone Number" pattern="+"/>
            <label htmlFor="Phone Number">Phone Number</label>
          </div>

          <div className="form-group">
            <input type="Number" id="" placeholder="New Password" pattern="[a-zA-Z0-9!@#$%^&*()_+=\-[\]{}|\\;:'\" />
            <label htmlFor="New Password">New Password</label>
          </div>


          {/* <div className="Uploadfile">
            <input type="file" id="document-upload" name="document" />
            <label htmlFor="document-upload">Upload your document</label>
          </div> */}

          {/* <div className="form-group">
            <textarea type="Message" id="Message" placeholder="Message"></textarea>
            <label htmlFor="Message">Your message here</label>
          </div> */}

          <div className="center-btn">
            <button onClick={loginuser} type="submit" className="btn">Reset</button>
          </div>
<div className="Alreadyhaveaccount">
    <a href="http://localhost:3000/Login_Student">Already have an account?</a>
    
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default ForgetPassword
