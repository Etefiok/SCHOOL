import React from "react";
import { useState } from "react";
import "../session.css";
import NavBar_Student from "../NavBar_Student";
import Jss1_Library from "./Jss1_Library";
import Jss2_Library from "./Jss2_Library";
import Jss3_Library from "./Jss3_Library";
import Sss1_Library from "./Sss1_Library";
import Sss2_Library from "./Sss2_Library";
import Sss3_Library from "./Sss3_Library";


const Library = () => {
    // const navigate = useNavigate();

    // function videoPlayer1() {
    //     navigate("/VideoPlayer1");
    // }

    const [activeTab, setActiveTab] = useState('Tab1');
const handleTabClick = (tabName) => 
setActiveTab(tabName);

const tabContent = {
  Tab1: <Jss1_Library />,
  Tab2: <Jss2_Library /> ,
  Tab3: <Jss3_Library />,
  Tab4: <Sss1_Library />,
  Tab5: <Sss2_Library />,
  Tab6: <Sss3_Library />,
  
  
};

    return (
        <div>
            <NavBar_Student />
            <div className="session">
                <p>School Library</p>
            </div>
            <div className="SubjectTop_container">
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab1')}>JSS1</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab2')}>JSS2</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab3')}>JSS3</button>
            
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab4')}>SSS1</button>
                
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab5')}>SSS2</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab5')}>SSS3</button>

            </div>

                 {tabContent[activeTab]}
        </div>
            
     


    );
};

export default Library;
