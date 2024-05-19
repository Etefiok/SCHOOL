import React from 'react';
import Ss1profileData from '../../Ss1profileData';
import '../../AbdullahiShehu.css'
import { useState } from 'react';
import TestBooks from './TestBooks';
import Recommended_Books from './Recommended_Books';


const Books = () => {
// const [showResult, setShowResult] = useState(false)

const [activeTab, setActiveTab] = useState('Tab1');
const handleTabClick = (tabName) => 
setActiveTab(tabName);

const tabContent = {
    TestBooks: <TestBooks />,
    RecommendedBooks: <Recommended_Books />,
   

  
};

const Students = Ss1profileData[0];

  return (
    
<div className='cardtoppag'>

{/* page writeup section */}
<div className=''>
<div className='Abdull'>
<button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
     onClick={() => handleTabClick('TestBooks')}>Test Books</button>

<button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('RecommendedBooks')}>Recommended</button>

{tabContent[activeTab]}

  </div>  
      </div>
    </div>
  );

  
}

export default Books;
