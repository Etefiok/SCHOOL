import React from "react";
import NavBar from "./NavBar_out";
import { useState } from "react";
import "./session.css";
import { useNavigate } from "react-router-dom";
import NavBar_Student from "./NavBar_Student";
import Jss1MathsSessions from "./Jss1SubjectSessionFolder/Maths";
import Jss1EnglishSessions from "./Jss1SubjectSessionFolder/English";
import Jss1_Lit_EnglishSessions from "./Jss1SubjectSessionFolder/LitInEnglish";
import Jss1_Social_Studies_Sessions from "./Jss1SubjectSessionFolder/SocialStudies";
import Jss1_Computer_Studies_Sessions from "./Jss1SubjectSessionFolder/ComputerStudies";
import Jss1_Economics_Sessions from "./Jss1SubjectSessionFolder/Economics";
import Jss1_Basic_Tech_Sessions from "./Jss1SubjectSessionFolder/BasicTech";
import Jss1_Agriculture_Sessions from "./Jss1SubjectSessionFolder/Agriculture";
import Jss1_Biology_Sessions from "./Jss1SubjectSessionFolder/Biology";
import Jss1_Yeroba_Sessions from "./Jss1SubjectSessionFolder/Yeroba";
import Jss1_CRK_Sessions from "./Jss1SubjectSessionFolder/CRK";
import Jss1_Chemistry_Sessions from "./Jss1SubjectSessionFolder/Chemistry";
import Jss1_Gorvenment_Sessions from "./Jss1SubjectSessionFolder/Government";
import Jss1_Physics_Sessions from "./Jss1SubjectSessionFolder/Physics";
import Jss1_Science_Sessions from "./Jss1SubjectSessionFolder/Science";
import Jss1_Technical_Drawing_Sessions from "./Jss1SubjectSessionFolder/TechnicalDrawing"
import Jss1_Auto_Mech_Sessions from "./Jss1SubjectSessionFolder/AutoMech";


const Jss1session = () => {
    // const navigate = useNavigate();

    // function videoPlayer1() {
    //     navigate("/VideoPlayer1");
    // }

    const [activeTab, setActiveTab] = useState('Tab1');
const handleTabClick = (tabName) => 
setActiveTab(tabName);

const tabContent = {
  Tab1: <Jss1MathsSessions />,
  Tab2: <Jss1EnglishSessions /> ,
  Tab3: <Jss1_Lit_EnglishSessions />,
  Tab4: <Jss1_Social_Studies_Sessions />,
  Tab5: <Jss1_Economics_Sessions />,
  Tab6: <Jss1_Computer_Studies_Sessions />,
  Tab7: <Jss1_Basic_Tech_Sessions />,
  Tab8: <Jss1_Agriculture_Sessions /> ,
  Tab9: <Jss1_Biology_Sessions />,
  Tab10: <Jss1_Yeroba_Sessions />,
  Tab11: <Jss1_Chemistry_Sessions />,
  Tab12: <Jss1_Gorvenment_Sessions />,
  Tab13: <Jss1_CRK_Sessions />,
  Tab14: <Jss1_Physics_Sessions /> ,
  Tab15: <Jss1_Science_Sessions />,
  Tab16: <Jss1_Technical_Drawing_Sessions />,
  Tab17: <Jss1_Auto_Mech_Sessions />,
  
};

    return (
        <div>
            <NavBar_Student />
            <div className="session">
                <p>JSS1 Sessions History</p>
            </div>
            <div className="SubjectTop_container">
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab1')}>Maths</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab2')}>English</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab3')}>Lit in English</button>
            
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab4')}>Social Stodies</button>
                
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab5')}>Economics</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab6')}>Computer Studies</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab7')}>Basic Technology</button>
                
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab8')}>Agriculture</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab9')}>Biology</button>
                
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab10')}>Yeroba</button>
                
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab11')}>Chemistry</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab12')}>Government</button>
                

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab13')}>CRK</button>
                

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab14')}>Physics</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab15')}>Science</button>

                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab16')}>Technical Drawing</button>
                
                <button className={`SubjectTop ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab17')}>Auto Mech</button>
            </div>

                 {tabContent[activeTab]}
        </div>
            
     


    );
};

export default Jss1session;
