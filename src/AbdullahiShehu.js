import React from 'react';
import Ss1profileData from "./Ss1profileData";
import './AbdullahiShehu.css'
import AbdullahiShehuPayment from './AbdullahiShehuPayment';
import AbdullahiShehuAdmission from './AbdullahiShehuAdmission';
import AbdullahiShehuStudentStatus from './AbdullahiShehuStudentStatus';
import AbdullahiShehuResult from './AbdullahiShehuResult';
import Navba from './NavBar';
import { useHref } from 'react-router-dom';
import { useState } from 'react';
import AbdullahiShehuBiography from './AbdullahiShehuBiography';
import AbdullahiShehuTrophy from './AbdullahiShehuTrophy';
import Tablee from './Table';
import AbdullahiShehuResultStatus from './AbdullahiShehuResultStatus';
import NavBar_Student from './NavBar_Student';


const AbdullahiShehu = () => {
// const [showResult, setShowResult] = useState(false)

const [activeTab, setActiveTab] = useState('Tab1');
const handleTabClick = (tabName) => 
setActiveTab(tabName);

const tabContent = {
  Tab1: <AbdullahiShehuAdmission />,
  Tab2: <AbdullahiShehuPayment /> ,
  Tab3: <AbdullahiShehuStudentStatus />,
  Tab4: <AbdullahiShehuResultStatus />,
  Tab5: <AbdullahiShehuBiography />,
  Tab6: <AbdullahiShehuTrophy />,
  
};

const Students = Ss1profileData[0];

// const scrollToSection = () =>{
//  setShowResult(!showResult)
// }



  return (
    
<div className='cardtoppag'>

<div>

      <NavBar_Student />

</div>

{/* card section */}
    <div className='cardpage'>
    <div className="cardbody" >
      <div style={{ width: "15rem", margin: "10px", textAlign: "center", lineHeight: "10px" }}>
        <h5>{Students.title}</h5>

        <div className="card-img-top" >
      <img src={Students.image} alt={Students.title} />
      </div>
        <p>{Students.name}</p>
        <p>{Students.team}</p>
        <p>{Students.nationality}</p>
        <p>{Students.jerseyNumber}</p>
        <p>{Students.age}</p>
  
      </div>
    </div>
  </div>


{/* page writeup section */}
<div className='AbdullahiShehuwriteup'>
<div className='Abdull'>
<button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
     onClick={() => handleTabClick('Tab1')}>Admission Status</button>

<button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('Tab2')}>Payment Status</button>

    <button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
     onClick={() => handleTabClick('Tab3')}>Student Status</button>
 
    <button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
     onClick={() => handleTabClick('Tab4')}>Student Result</button>
    
   <button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
     onClick={() => handleTabClick('Tab5')}>Student Biography</button>

    <button className={`AbdulResult ${activeTab === 'Tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('Tab6')}>Trophies</button>


{tabContent[activeTab]}

  </div>  
    {/* <h1>this is Abdullahi biography</h1> */}
            
       
      {/* <div>
            <div className='Abdull'>
              <h1>section1</h1>
            </div>
            <div className='Abdull'>
            
            
            </div> */}
      </div>
    </div>
// </div>





  );

  
}

export default AbdullahiShehu;



// const onlyIndexZero = Ss1profileData.map((item, index) => {
//     if (index === 0) {
//       return item;
//     }
//   });
  
//   console.log(onlyIndexZero);