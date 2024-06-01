import React, { useState, useEffect } from 'react';
import './notification.css';
import axios from 'axios';

function Notification() {
  const [generalAlerts, setGeneralAlerts] = useState([]);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const fetchGeneralAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/general-alerts');
        setGeneralAlerts(response.data);
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

  return (
    <div>
      {showNotice && (
        <div className="notice-overlay">
          {generalAlerts.map((alert, index) => (
            <div key={index} className="noticeboard">
              <h1>NOTICE !!!</h1>
              <h5>{alert.title}</h5>
              <h3>{alert.topic}</h3>
              <div dangerouslySetInnerHTML={{ __html: alert.content }} />
              <button onClick={() => setShowNotice(false)}>Close</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notification;
