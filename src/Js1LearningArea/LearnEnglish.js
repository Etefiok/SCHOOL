import React from 'react';
import Js1EnglishData from "./Js1EnglishData";
import './LearnEconomics.css'
import { useState } from 'react';
import NavBar_Student from '../NavBar_Student';
import Js1EconsTopic1 from './Js1EconomicsTopic1';
import Js1EconsTopic1Test from './Js1EconsTopic1Test';
import Js1EngTopicOneToOne from './Js1EngTopicOneToOne';
import Js1EngTopic1Test from './Js1EngTest1';
import Js1EngTest2 from './Js1EngTest2';
import Js1EngTest3 from './Js1EngTest3';
import Js1EngTest1 from './Js1EngTest1';



const LearnEnglish = ({updateScore}) => {

// const [showResult, setShowResult] = useState(false)

const [activeTab, setActiveTab] = useState('Tab1');
const handleTabClick = (tabName) => 
setActiveTab(tabName);

const tabContent = {
  Tab1:  <Js1EconsTopic1 />,
  Tab1Js1EngTest1:  <Js1EngTest1 updateScore={updateScore}/>,
  Tab2Js1EngTest2:  <Js1EngTest2 updateScore={updateScore} />,
  Tab3Js1EngTest3:  <Js1EngTest3 updateScore={updateScore} />,
  Tab4OneToOne:  <Js1EngTopicOneToOne updateScore={updateScore}/> ,

  // Tab5:  <Js1EconsTopic1 />,
  // Tab6:  <Js1EconsTopic1 />,
  
};

const js1English = Js1EnglishData[0];

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
            <h5>{js1English.Subject}</h5>
               
            <div className='TopicBox'>
            <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab1')}>{js1English.Topic1}</button>

<button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab1Js1EngTest1')}>Test 1</button>

                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab2Js1EngTest2')}>Test 2</button>

                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab3Js1EngTest3')}>Test 3</button>
            
                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab4OneToOne')}>One-To-One</button>
                
                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab5')}>{js1English.Topic5}</button>

                <button className={`Topic1 ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab6')}>{js1English.Topic6}</button>
                
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

export default LearnEnglish;



// const onlyIndexZero = Ss1profileData.map((item, index) => {
//     if (index === 0) {
//       return item;
//     }
//   });
  
//   console.log(onlyIndexZero);