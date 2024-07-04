import React, { useState } from 'react';
import './Contactform.css';
import { useNavigate } from 'react-router-dom';
import Navba from '../NavBar';
import NavBar_out from '../NavBar_out';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaTimes, FaCheck } from "react-icons/fa";

function ContactForm() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState(null);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    title: "",
    message: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    emailAddress: '',
    title: "",
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasErrors = false;

    if (!formData.message.trim()) {
      setErrors({ ...errors, message: 'Please enter a message' });
      hasErrors = true;
    }

    if (!formData.title.trim()) {
      setErrors({ ...errors, title: 'Please enter a Title' });
      hasErrors = true;
    }

    if (!formData.emailAddress.trim()) {
      setErrors({ ...errors, emailAddress: 'Please enter your email' });
      hasErrors = true;
    } else if (!isValidEmail(formData.emailAddress)) {
      setErrors({ ...errors, emailAddress: 'Please enter a valid email' });
      hasErrors = true;
    }

    if (!formData.fullName.trim()) {
      setErrors({ ...errors, fullName: 'Please enter your name' });
      hasErrors = true;
    }

    if (!hasErrors) {
      try {
        await handleFormSubmission();
        // Clear the form data after successful submission
        setFormData({ fullName: '', emailAddress: '', title: "", message: '' });
      } catch (error) {
        console.error('Error submitting form:', error);
        setError('An error occurred while submitting the form. Please try again later.');
      }
    }
  };

  const handleFormSubmission = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/ContactUs', formData);
      console.log('Form submitted successfully:', response.data);
      setAlertMessage(
        <span>
          <span className="Login-successfull">
            <FaCheck /> &nbsp; &nbsp; Message sent ...
          </span>
        </span>
      );
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred while submitting the form. Please try again later.');
      throw error;
    }
  };

  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  return (
    <div>
      <NavBar_out />
      <div className="page">
        <div className="contact">
          <div className="company">
            <div className="comapnylogo">
              <img src={require('../images.jpg/schoollogo.jpeg')} alt="logo" />
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
        <form className="form1" onSubmit={handleSubmit}>
          <h1 className="contacttext">Contact</h1>
          {alertMessage}
          {/* Display all errors at one spot */}
          {Object.values(errors).some((error) => error !== '') && (
            <div className="error-container">
              {Object.keys(errors).map((key) => (
                errors[key] !== '' && (
                  <div key={key} className="error">
                    {errors[key]}
                  </div>
                )
              ))}
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
              id="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
            />
            <label htmlFor="title">Title</label>
          </div>

          <div className="formline">
            <textarea
              type="Message"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="message">Your message here</label>
            <div>
            
            </div>
          </div>
          <div className='Send-Button'>
<Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
