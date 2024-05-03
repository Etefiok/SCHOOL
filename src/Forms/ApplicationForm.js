import React from 'react';
import './Contactform.css';
import { useNavigate } from 'react-router-dom';
import Navba from '../NavBar_out';
import NavBar_out from '../NavBar_out';
import Form from 'react-bootstrap/Form';
// import HomePage from './HomePage';





function ApplicationForm () {

  const Navigate = useNavigate();

  function HomePage (){
    Navigate("/ ")
  }
  

  return (
    <div><NavBar_out /> 
    <div className="page">
      <div className="contact">
        <div className="company">
          <div className="comapnylogo">
            <img src={require("../images.jpg/schoollogo.jpeg")} alt="logo" />
          
          </div>
          <div className="companydetails">
            <i className="fa fa-map-marker"></i>
            123 Any Street Scottersdale, az, 85251
          </div>

          <div className="companydetails">
            <i className="fas fa-phone-volume"></i>
            555 555 555
          </div>

          <div className="companydetails">
            <i className="fas fa-clock"></i>
            123 am
          </div>
        </div>
        </div>

        {/* Form section */}
        <div className="form1">
          <h1 className="contacttext">Application form</h1>
          <div className="formline">
            <input type="text" id="fullName" placeholder="Your name" />
            <label htmlFor="fullName">Your name</label>
          </div>

          <div className="formline">
            <input type="email" id="emailAddress" placeholder="Your email" />
            <label htmlFor="emailAddress">Your email</label>
          </div>

          <div className="formline">
            <input type="text" id="position" placeholder="Position Applied For" />
            <label htmlFor="text">Position Applied For</label>
          </div>

          {/* <div className="formline">
            <p>Submit your resume (pdf format) only</p>
            <input type="file" id="resume" accept=".pdf" />
            <label htmlFor="resume">Upload Resume (PDF only)</label>
          </div> */}

          <div className="formline">
            <span>Your resume here</span>
          {/* <Form.Group controlId="formFileMultiple" className="mb-3"> */}
        <Form.Control type="file" multiple />
        <label>Multiple files input example</label>
      {/* </Form.Group> */}
      </div>
          
          <div className="formline">
            <textarea type="Message" id="Message" placeholder="Message"></textarea>
            <label htmlFor="Message">Your message here</label>
          </div>

          <div className="GoodLuckButton">
            <button onClick={HomePage} type="submit">Submit</button>
           
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ApplicationForm;
