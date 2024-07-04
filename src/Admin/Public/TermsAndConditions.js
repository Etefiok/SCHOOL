import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import "./TermsAndConditions.css"

const TermsAndConditions = () => {
  const [content, setContent] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const fetchTermsAndConditions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/terms-and-conditions');
        setContent(response.data.content);
        setLastUpdated(response.data.updatedAt);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTermsAndConditions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const updatedAt = new Date().toLocaleString();
      await axios.post(
        'http://localhost:5000/auth/terms-and-conditions',
        { content, updatedAt },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      alert(`Terms and conditions saved successfully! Last updated: ${updatedAt}`);
      setLastUpdated(updatedAt);
    } catch (error) {
      console.error(error);
      alert('Error saving terms and conditions');
    }
  };
  

  return (
    <div class="terms-container">
  <h1>Terms and Conditions</h1>
  <form onSubmit={handleSubmit}>
    <label htmlFor="content">Enter your terms and conditions:</label>
    <textarea
      id="content"
      name="content"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      rows="10"
      cols="50"
      required
      class="terms-textarea"
    ></textarea>
    <p class="last-updated">Last updated: {lastUpdated}</p>
    <button type="submit" class="terms-submit">Save</button>
  </form>
</div>

  );
};

export default TermsAndConditions;
