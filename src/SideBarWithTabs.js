import React, { useState } from 'react';

const SidebarWithTabs = () => {
  const [activeTab, setActiveTab] = useState('Tab1'); // State to track active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Set the active tab when clicked
  };

  const tabContent = {
    Tab1: 'this is my name',
    Tab2: 'samuel is my name',
    Tab3: 'famous is nice',
    // Add more tabs as needed...
  };

  return (
    <div className="sidebar">
      <div className="tabs">
        <button
          className={`tab-item ${activeTab === 'Tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab1')}>Tab 1</button>


        <button
          className={`tab-item ${activeTab === 'Tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab2')}>Tab 2</button>


        <button
          className={`tab-item ${activeTab === 'Tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('Tab3')}>Tab 3</button>

        {/* Add more tab items as needed... */}


      </div>
      <div className="content">
        {tabContent[activeTab]} {/* Display content of active tab */}
      </div>
    </div>
  );
};

export default SidebarWithTabs;