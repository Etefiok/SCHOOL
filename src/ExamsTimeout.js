import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ExamsTimeout.css"



const ExamsTimeout = () =>{
const navigate = useNavigate();
const [timeoutActivated, setTimeoutActivated] = useState(false);

useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to another page after the timeout
      setTimeoutActivated(true);
    }, );
    return () => clearTimeout(timeout); // Clear the timeout when the component unmounts
}, []);

return(
    <div className="exams-container">
      {/* Display notice when the timeout is activated */}
      {timeoutActivated && 

      
      <div className="centered-notice">
        
        <p>Timeout activated! Please submit your answers.</p>
        <button>Close</button></div>}
      {/* ... (other JSX) */}
      </div>

);
      };
      
      export default ExamsTimeout