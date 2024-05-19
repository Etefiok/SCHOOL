import React from 'react';
import Ss1profileData from '../../Ss1profileData';
import '../../AbdullahiShehu.css'
import AbdullahiShehuPayment from '../../AbdullahiShehuPayment';
import AbdullahiShehuAdmission from '../../AbdullahiShehuAdmission';
import AbdullahiShehuStudentStatus from '../../AbdullahiShehuStudentStatus';
import { useState } from 'react';
import AbdullahiShehuBiography from '../../AbdullahiShehuBiography';
import AbdullahiShehuTrophy from '../../AbdullahiShehuTrophy';
import AbdullahiShehuResultStatus from '../../AbdullahiShehuResultStatus';
import NavBar_Student from '../../NavBar_Student';
import GeneralAlert from './GeneralAlert';
import JSS1Alert from './JSS1Alert';
import JSS2Alert from './JSS2Alert';
import JSS3Alert from './JSS3Alert';
import SSS1Alert from './SSS1Alert';
import SSS2Alert from './SSS2Alert';
import SSS3Alert from './SSS3Alert';


const AlertMessages = () => {
// const [showResult, setShowResult] = useState(false)

const [activeTab, setActiveTab] = useState('Tab1');
const handleTabClick = (tabName) => 
setActiveTab(tabName);

const tabContent = {
    GeneralAlert: <GeneralAlert />,
    JSS1Alert: <JSS1Alert /> ,
    JSS2Alert: <JSS2Alert />,
    JSS3Alert: <JSS3Alert />,
    SSS1Alert: <SSS1Alert />,
    SSS2Alert: <SSS2Alert />,
    SSS3Alert: <SSS3Alert />,

  
};

const Students = Ss1profileData[0];

  return (
    
<div className='cardtoppag'>

{/* page writeup section */}
<div className=''>
<div className='Abdull'>
<button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
     onClick={() => handleTabClick('GeneralAlert')}>General Alert</button>

<button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('JSS1Alert')}>JSS1 Alert</button>

    <button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
     onClick={() => handleTabClick('JSS2Alert')}>JSS2 Alert</button>
 
    <button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
     onClick={() => handleTabClick('JSS3Alert')}>JSS3 Alert</button>
    
   <button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
     onClick={() => handleTabClick('SSS1Alert')}>SSS1 Alert</button>

    <button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('SSS2Alert')}>SSS2 Alert</button>

<button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('SSS3Alert')}>SSS3 Alert</button>


{tabContent[activeTab]}

  </div>  
      </div>
    </div>
  );

  
}

export default AlertMessages;
