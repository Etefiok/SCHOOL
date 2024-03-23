import './DropdownPage.css';


import React, { useState } from 'react';

const DropdownPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="dropdown">
        <div>
      <button onClick={toggleDropdown} className="dropbtn">Dropdown</button>
      </div>
      {isOpen && (
        
        <div className="dropdown-content">
            <p>jhkjgkjgkjgkgkgkjgkjgkjgkjgkjgk</p>
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
        
      )}
    </div>
  );
};

export default DropdownPage;