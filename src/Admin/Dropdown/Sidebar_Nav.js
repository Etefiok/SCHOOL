import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Sidebar_Nav = () => {
  const [dropdowns, setDropdowns] = useState([]);

  const handleAddDropdown = () => {
    const newDropdown = {
      options: ['Option 1', 'Option 2', 'Option 3'],
      onChange: (e) => console.log(e.target.value),
    };
  
    setDropdowns([...dropdowns, newDropdown]);
  };

  return (
    <div>
      <button onClick={handleAddDropdown}>Add Dropdown</button>
      {dropdowns.map((dropdown, index) => (
        <Dropdown key={index} options={dropdown.options} onChange={dropdown.onChange} />
      ))}
      
    </div>
  );
};

export default Sidebar_Nav;