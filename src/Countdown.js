import React, { useState, useEffect } from 'react';
import ExamsTimeout from './ExamsTimeout';
import "./Countdown.css"

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 2, seconds: 5, milliseconds: 0 });
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [timer, setTimer] = useState();


  const stopTimer = () => {
    clearInterval(timer);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = { ...prevCountdown };
        newCountdown.milliseconds -= 1000; // Subtract 1000 milliseconds
  
        if (newCountdown.milliseconds < 0) {
          newCountdown.seconds -= 1;
          newCountdown.milliseconds += 1000;
        }

        if (newCountdown.seconds === 0 && newCountdown.minutes === 0 && newCountdown.hours === 0) {
          clearInterval(interval); // Stop the interval when seconds reach 0
          setShowSubmitButton(true); // Show the submit button
        }
  
        if (newCountdown.seconds < 0) {
          newCountdown.minutes -= 1;
          newCountdown.seconds += 60;
        }
  
        if (newCountdown.minutes < 0) {
          newCountdown.hours -= 1;
          newCountdown.minutes += 60;
        }
  
        return newCountdown;
      });
    }, 1000); // Change the interval to 1000 milliseconds (1 second)
  
    setTimer(interval);
  
    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);


  useEffect(() => {
    if (countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0 && countdown.milliseconds === 0) {
      stopTimer();
      setShowSubmitButton(true);
    }
  }, [countdown]);

  return (
    <div className='Timer'>
      <h1>{countdown.hours}:</h1>
      <h1>{countdown.minutes}:</h1>
      <h1>{countdown.seconds}</h1>
     {/* {countdown === 0 ? <button>Submit</button>: } */}
      {showSubmitButton && <ExamsTimeout />}
    </div>
  );
};

export default CountdownTimer;
