import React from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import NavBar_Student from './NavBar_Student';
import NavBar_out from './NavBar_out';




function SignUp () {
  
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
          </div>

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

        {/* Form section */}
        <div className="form">
            <div className="newaccounttext">
                <h3 >Create a new account</h3>
                <p>it's quick and easy</p>
             

            
            {/* <div className=""> */}
            <input type="text" id="" placeholder="First name" />
            <label htmlFor="Firstname">First name</label>
          {/* </div> */}

          {/* <div className=""> */}
            <input type="text" id="" placeholder="Lastname" />
            <label htmlFor="Surname">Lastname</label>
          {/* </div> */}

          {/* <div className=""> */}
          
            <input type="text" id="" placeholder="ID Number" />
            <label htmlFor="ID Number">ID Number</label>
          {/* </div> */}

          {/* <div className=""> */}
            <input type="Number" id="" placeholder="Phone Number" pattern="[a-zA-Z0-9!@#$%^&*()_+=\-[\]{}|\\;:'\" />
            <label htmlFor="Phone Number">Phone Number</label>
          {/* </div> */}

          {/* <div className=""> */}
          <input type="text" id="" placeholder="Role" />
            <label htmlFor="Phone Number">Role</label>
          {/* </div> */}

          {/* <div className=""> */}
            <input type="text" id="" placeholder="Password" pattern="[a-zA-Z0-9!@#$%^&*()_+=\-[\]{}|\\;:'\" />
            <label htmlFor="Password">Password</label>
          {/* </div> */}

          {/* <div className=""> */}
          <input type="text" id="" placeholder="Confirm Pasword" pattern="[a-zA-Z0-9!@#$%^&*()_+=\-[\]{}|\\;:'\" />
            <label htmlFor="Password">Confirm Pasword</label>
          {/* </div> */}
          
         <div className="center-btn">
            <button onClick={loginuser} type="submit" >Sign Up</button>
          </div>
<div className="Alreadyhaveaccount">
    <a href="http://localhost:3001/LoginForExams">Already have an account?</a>
    
</div>
</div> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp
