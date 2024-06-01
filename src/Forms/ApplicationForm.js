import React, { useState } from "react";
import "./Contactform.css";
import { useNavigate } from "react-router-dom";
import Navba from "../NavBar_out";
import NavBar_out from "../NavBar_out";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { FaEye, FaEyeSlash, FaTimes, FaCheck } from "react-icons/fa";

// import HomePage from './HomePage';

function ApplicationForm() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // function HomePage (){
  //   Navigate("/ ")
  // }

  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    position: "",
    resume: null,
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
    let isPdfFile = true;

  for (let i = 0; i < e.target.files.length; i++) {
    if (e.target.files[i].type !== 'application/pdf') {
      isPdfFile = false;
      break;
    }
  }

  if (isPdfFile) {
    setFormData({ ...formData, resume: e.target.files[0] });
  } else {
    alert('Please select only PDF files.');
    e.target.value = '';
  }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form fields
    if (formData.fullName.trim() === '') {
      setErrorMessage('Please enter your full name.');
      setIsLoading(false);
      return;
    }

    if (formData.emailAddress.trim() === '') {
      setErrorMessage('Please enter your email address.');
      setIsLoading(false);
      return;
    }

    if (formData.position.trim() === '') {
      setErrorMessage('Please enter the position you are applying for.');
      setIsLoading(false);
      return;
    }

    if (!formData.resume) {
      setErrorMessage('Please upload your resume.');
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('fullName', formData.fullName);
      formData.append('emailAddress', formData.emailAddress);
      formData.append('position', formData.position);
      formData.append('resume', formData.resume);
      formData.append('message', formData.message); 

      await axios.post('http://localhost:5000/auth/applications', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Form submitted successfully:');
      setAlertMessage(
        <span>
          <span className="Login-successfull">
            <FaCheck /> &nbsp; &nbsp; Message sent ...
          </span>
        </span>
      );
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error('Error submitting application:', error);
      setErrorMessage('An error occurred while submitting the application. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  

  // function handleFileChange(event) {
  //   const files = event.target.files;
  //   for (let i = 0; i < files.length; i++) {
  //     if (files[i].type !== 'application/pdf') {
  //       alert('Please select only PDF files.');
  //       event.target.value = '';
  //       return;
  //     }
  //   }

  // }

  return (
    <div>
      <NavBar_out />
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
        <form onSubmit={handleSubmit} className="form1">
          <h1 className="contacttext">Application form</h1>
          {errorMessage && (
        <div className="alert alert-danger">
          <FaTimes /> {errorMessage}
        </div>
      )}
          <div className="formline">
            <input 
            type="text" 
            id="fullName" 
            placeholder="Your name"
            value={formData.fullName}
            onChange={handleInputChange}
            />
            <label htmlFor="fullName">Your name</label>
          </div>

          <div className="formline">
            <input 
            type="email" 
            id="emailAddress" 
            placeholder="Your email" 
            value={formData.emailAddress}
            onChange={handleInputChange}
            />
            <label htmlFor="emailAddress">Your email</label>
          </div>

          <div className="formline">
            <input
              type="text"
              id="position"
              placeholder="Position Applied For"
              value={formData.position}
              onChange={handleInputChange}
            />
            <label htmlFor="text">Position Applied For</label>
          </div>

          {/* <div className="formline">
            <p>Submit your resume (pdf format) only</p>
            <input type="file" id="resume" accept=".pdf" />
            <label htmlFor="resume">Upload Resume (PDF only)</label>
          </div> */}

          <div className="formline">
            <span>Your resume here</span>
            <Form.Control type="file" multiple accept="pdf"
            onChange={handleFileChange} />
            <label>Your resume here</label>
          </div>

          <div className="formline">
            <textarea
              type="Message"
              id="Message"
              placeholder="Message"
            ></textarea>
            <label htmlFor="Message">Your message here</label>
          </div>

          <div className="GoodLuckButton">
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default ApplicationForm;
