import React from 'react';
import Js1EconomicsData from "./Js1EconomicsData";
import './LearnEconomics.css'
import { useState } from 'react';
import NavBar_Student from '../NavBar_Student';
import Js1EconsTopic1 from './Js1EconomicsTopic1';
import Js1EconsTopic1Test from './Js1EconsTopic1Test';



const LearnEconomics = ({updateScore}) => {

// const [showResult, setShowResult] = useState(false)

const [activeTab, setActiveTab] = useState('Tab1');
const handleTabClick = (tabName) => 
setActiveTab(tabName);

const tabContent = {
  Tab1:  <Js1EconsTopic1 />,
  Tab1Test:  <Js1EconsTopic1Test updateScore={updateScore}/>,
  Tab2:  <Js1EconsTopic1 /> ,
  // Tab3:  <Js1EconsTopic1 />,
  // Tab4:  <Js1EconsTopic1 />,
  // Tab5:  <Js1EconsTopic1 />,
  // Tab6:  <Js1EconsTopic1 />,
  
};

const js1Economics = Js1EconomicsData[0];

// const scrollToSection = () =>{
//  setShowResult(!showResult)
// }



  return (
    
<div className=''>

    <div>
      <NavBar_Student />
    </div>

{/* card section */}
    <div className='TopicCard'>
        <div className="cardbody" >
          <div style={{ width: "15rem", margin: "10px", textAlign: "center", lineHeight: "10px" }}>
            <h5>{js1Economics.Subject}</h5>
               
            <div className='TopicBox'>
            <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab1')}>{js1Economics.Topic1}</button>

<button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab1Test')}>Topic 1 Test</button>

                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab2')}>{js1Economics.Topic2}</button>

                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab3')}>{js1Economics.Topic3}</button>
            
                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab4')}>{js1Economics.Topic4}</button>
                
                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab5')}>{js1Economics.Topic5}</button>

                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab6')}>{js1Economics.Topic6}</button>
                
                </div>
          </div>
        </div>
    </div>


{/* page writeup section */}
      <div className='TopicWriteup'>
            <div className='TopicPage'>
            {tabContent[activeTab]}
            </div>    
      </div>
</div>

  );
}

export default LearnEconomics;



// const onlyIndexZero = Ss1profileData.map((item, index) => {
//     if (index === 0) {
//       return item;
//     }
//   });
  
//   console.log(onlyIndexZero);