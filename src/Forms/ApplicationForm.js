import React, { useState } from "react";
import "./Contactform.css";
import { useNavigate } from "react-router-dom";
import NavBar_out from "../NavBar_out";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { FaEye, FaEyeSlash, FaTimes, FaCheck } from "react-icons/fa";

function ApplicationForm() {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResume(file);
    } else {
      alert('Please select only PDF files.');
      e.target.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate the form fields
    if (fullName.trim() === '') {
      setErrorMessage('Please enter your full name.');
      setIsLoading(false);
      return;
    }

    if (emailAddress.trim() === '') {
      setErrorMessage('Please enter your email address.');
      setIsLoading(false);
      return;
    }

    if (position.trim() === '') {
      setErrorMessage('Please enter the position you are applying for.');
      setIsLoading(false);
      return;
    }

    if (!resume) {
      setErrorMessage('Please upload your resume.');
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('emailAddress', emailAddress);
      formData.append('position', position);
      formData.append('resume', resume);
      formData.append('message', message);

      await axios.post('http://localhost:5000/auth/application-form', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Form submitted successfully:');
      setAlertMessage(
        <span>
          <span className="Login-successfull">
            <FaCheck /> &nbsp; &nbsp; Application submitted successfully!
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
          {alertMessage && (
            <div className="alert alert-success">
              {alertMessage}
            </div>
          )}
          <div className="formline">
            <input
              type="text"
              id="fullName"
              placeholder="Your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="fullName">Your name</label>
          </div>

          <div className="formline">
            <input
              type="email"
              id="emailAddress"
              placeholder="Your email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <label htmlFor="emailAddress">Your email</label>
          </div>

          <div className="formline">
            <input
              type="text"
              id="position"
              placeholder="Position Applied For"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <label htmlFor="text">Position Applied For</label>
          </div>

          <div className="formline">
            <span>Your resume here</span>
            <Form.Control type="file" accept="application/pdf"
              onChange={handlePdfUpload} />
            <label>Your resume here</label>
          </div>

          <div className="formline">
            <textarea
              type="Message"
              id="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message">Your message here</label>
          </div>

          <div className="GoodLuckButton">
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
