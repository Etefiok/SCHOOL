import React, { useState, useEffect } from 'react';
import './DarkModePageToggle.css'

const DarkModePageToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModePageToggle;