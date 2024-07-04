import React, { useState, useEffect } from 'react';
import './notification.css';
import axios from 'axios';

function Notification() {
  const [generalAlerts, setGeneralAlerts] = useState([]);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const fetchGeneralAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/general-alerts');
        setGeneralAlerts(response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        setShowNotice(true);
      } catch (error) {
        console.error('Error fetching general alerts:', error);
      }
    };

    fetchGeneralAlerts();
    const timer = setTimeout(() => {
      setShowNotice(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNextAlert = () => {
    setCurrentAlertIndex((prevIndex) => (prevIndex + 1) % generalAlerts.length);
  };

  const handlePreviousAlert = () => {
    setCurrentAlertIndex((prevIndex) => (prevIndex - 1 + generalAlerts.length) % generalAlerts.length);
  };

  const currentAlert = generalAlerts[currentAlertIndex];

  return (
    <div>
      {showNotice && currentAlert && (
        <div className="notice-overlay">
          <div className="noticeboard">
            <h1>NOTICE !!!</h1>
            <h5>{currentAlert.topic}</h5>
            <div dangerouslySetInnerHTML={{ __html: currentAlert.content }} />
            
            {/* <div className="alert-navigation">
              <button onClick={handlePreviousAlert}>Previous</button>
              <button onClick={handleNextAlert}>Next</button>
            </div> */}

            <button onClick={() => setShowNotice(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
