import React from 'react';
import './notification.css';
import { useEffect } from 'react';
import { useState } from 'react';
import NotificationMassage from './NotificationMassage';




function Notification({ users }) {

    const massage = NotificationMassage[0];
    const [showNotice, setShowNotice]=
    useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotice(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


return (
  <div>
    {showNotice && (
      <div className="notice-overlay">
        <div className="noticeboard">
          <h1>NOTICE !!!</h1>
          <h5>{massage.Title}</h5>
          <p>{massage.Text}</p>
          <button onClick={() => setShowNotice(false)}>Close</button>
        </div>
      </div>
    )}
  </div>
);
}

export default Notification;