import React from "react";
import NavBar from "./NavBar_out";
import { useState, useEffect } from "react";
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
import Jss1_Technical_Drawing_Sessions from "./Jss1SubjectSessionFolder/TechnicalDrawing";
import Jss1_Auto_Mech_Sessions from "./Jss1SubjectSessionFolder/AutoMech";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import School_Calendar_on_front from "./School_Calendar_on_front";
import axios from 'axios';
import Cookies from "js-cookie";


const Jss1session = () => {
  const [activeTab, setActiveTab] = useState("Tab1");
  const navigate = useNavigate();


  useEffect(() => {
    const verifyUser = async () => { 
      try {
        // const token = localStorage.getItem('token');
        const token = Cookies.get('token'); 
        console.log({token})
        if (token) {
          navigate('/Jss1session');
          return;
        }
        const response = await axios.get('http://localhost:5000/auth/verify?page=Jss1session', {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        console.log('Verify response:', response.data);
        if (response.data.status === true) {
          navigate('/Jss1session');

        } else {
          navigate('/Login_Student');
        }
      } catch (error) {
        console.error('Error verifying user:', error);
        if (error.response) {
          console.error('Server response:', error.response.data);
        }
 
        navigate('/Login_Student');
      }
    };

    verifyUser();
  }, [navigate]);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    handleClose();
  };

  const tabContent = {
    Tab1: <Jss1MathsSessions />,
    Tab2: <Jss1EnglishSessions />,
    Tab3: <Jss1_Lit_EnglishSessions />,
    Tab4: <Jss1_Social_Studies_Sessions />,
    Tab5: <Jss1_Economics_Sessions />,
    Tab6: <Jss1_Computer_Studies_Sessions />,
    Tab7: <Jss1_Basic_Tech_Sessions />,
    Tab8: <Jss1_Agriculture_Sessions />,
    Tab9: <Jss1_Biology_Sessions />,
    Tab10: <Jss1_Yeroba_Sessions />,
    Tab11: <Jss1_Chemistry_Sessions />,
    Tab12: <Jss1_Gorvenment_Sessions />,
    Tab13: <Jss1_CRK_Sessions />,
    Tab14: <Jss1_Physics_Sessions />,
    Tab15: <Jss1_Science_Sessions />,
    Tab16: <Jss1_Technical_Drawing_Sessions />,
    Tab17: <Jss1_Auto_Mech_Sessions />,
  };

  //for side bar navigation
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  return (
    <div>
      <NavBar_Student />
      {/* <div className="session">
                <p>JSS1 Sessions History</p> */}
      {/* </div> */}
      <div className="SubjectTop_container">
        <div className="session">
          <p>JSS1 Sessions History</p>
        </div>
        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab1")}
        >
          Maths
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab2")}
        >
          English
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab3")}
        >
          Lit in English
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab4")}
        >
          Social Stodies
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab5")}
        >
          Economics
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab6")}
        >
          Computer Studies
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab7")}
        >
          Basic Technology
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab8")}
        >
          Agriculture
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab9")}
        >
          Biology
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab10")}
        >
          Yeroba
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab11")}
        >
          Chemistry
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab12")}
        >
          Government
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab13")}
        >
          CRK
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab14")}
        >
          Physics
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab15")}
        >
          Science
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab16")}
        >
          Technical Drawing
        </button>

        <button
          className={`SubjectTop ${activeTab === "Tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab17")}
        >
          Auto Mech
        </button>
      </div>

      {/* </div> */}
      <div className="Screen-Controle-content">{tabContent[activeTab]}</div>

      {/*  media query section */}

      <div className="Side-Bar-Nav">
        <>
          <Button variant="primary" onClick={handleShow}>
            +
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header className="Offcanvas" closeButton>
              <p>JSS1 Sessions History</p>
              {/* <Offcanvas.Title>Sign Up</Offcanvas.Title> */}
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Dropdown>
                <div className="SubjectTop_container_media">
                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab1")}
                  >
                    Maths
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab2")}
                  >
                    English
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab3")}
                  >
                    Lit in English
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab4")}
                  >
                    Social Stodies
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab5")}
                  >
                    Economics
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab6")}
                  >
                    Computer Studies
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab7")}
                  >
                    Basic Technology
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab8")}
                  >
                    Agriculture
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab9")}
                  >
                    Biology
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab10")}
                  >
                    Yeroba
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab11")}
                  >
                    Chemistry
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab12")}
                  >
                    Government
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab13")}
                  >
                    CRK
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab14")}
                  >
                    Physics
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab15")}
                  >
                    Science
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab16")}
                  >
                    Technical Drawing
                  </button>

                  <button
                    className={`SubjectTop ${
                      activeTab === "Tab1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("Tab17")}
                  >
                    Auto Mech
                  </button>
                </div>
              </Dropdown>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      </div>
    </div>
  );
};

export default Jss1session;
