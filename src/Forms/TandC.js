import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TandC = () => {
  const [content, setContent] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTermsAndConditions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/terms-and-conditions');
        setContent(response.data.content);
        setLastUpdated(response.data.updatedAt);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError('Error fetching terms and conditions');
        setIsLoading(false);
      }
    };

    fetchTermsAndConditions();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Terms and Conditions</h1>
      <div style={{textAlign: "left"}}>
        <p>{content}</p>
        <p>Last updated: {lastUpdated}</p>
      </div>
    </div>
  );
};

export default TandC;
