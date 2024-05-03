import React, { useState, useEffect, useRef } from "react";
import "./Homepage.css";
import { AccountCircle } from "@mui/icons-material";
import NavBar_Admin from "./NavBar_Admin";
import { useNavigate } from 'react-router-dom';
import Js1EnglishData from "./Js1LearningArea/Js1EnglishData";
import Js1EconsTopic1 from "./Js1LearningArea/Js1EconomicsTopic1";
import Js1EconsTopic1Test from "./Js1LearningArea/Js1EconsTopic1Test";
import Js1EngTopicOneToOne from "./Js1LearningArea/Js1EngTopicOneToOne";
import Js1EngTest2 from "./Js1LearningArea/Js1EngTest2";
import Js1EngTest3 from "./Js1LearningArea/Js1EngTest3";
import Js1EngTest1 from "./Js1LearningArea/Js1EngTest1";
import axios from 'axios';
import Cookies from "js-cookie";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Sidebar_Nav from "./Admin/Dropdown/Sidebar_Nav";

const Homepage_Admin = ({ updateScore }) => {

  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  

    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const verifyUser = async () => { 
        try {
          // const token = localStorage.getItem('token');
          const token = Cookies.get('token'); 
          console.log({token})
          if (token) {
            navigate('/Homepage_Admin');
            return;
          }
          const response = await axios.get('http://localhost:5000/auth/verify?page=Homepage_Admin', {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });
          console.log('Verify response:', response.data);
          if (response.data.status === true) {
            navigate('/Homepage_Admin');
  
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
  

const [activeTab, setActiveTab] = useState('Tab1');
const handleTabClick = (tabName) => {
  setActiveTab(tabName);
  handleClose(); // Close the Offcanvas component when a tab button is clicked
};

  const tabContent = {
    Tab1:  <Js1EconsTopic1 />,
    Tab1Js1EngTest1:  <Js1EngTest1 updateScore={updateScore}/>,
    Tab2Js1EngTest2:  <Js1EngTest2 updateScore={updateScore} />,
    Tab3Js1EngTest3:  <Js1EngTest3 updateScore={updateScore} />,
    Tab4OneToOne:  <Js1EngTopicOneToOne updateScore={updateScore}/> ,
    JSS1:  <Sidebar_Nav/> ,

  
    // Tab5:  <Js1EconsTopic1 />,
    // Tab6:  <Js1EconsTopic1 />,
    
  };

  const js1English = Js1EnglishData[0];

  return (
    <div>
      <div>
        <NavBar_Admin />
      </div>
      <div className="blankSpace"></div>

      <div>
        <h1>THIS IS THE ADMIN PAGE</h1>
      </div>

      <div className="Side-Bar-Nav">
        <Button variant="primary" onClick={handleShow}>
          +
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header className="Offcanvas" closeButton>
            <Offcanvas.Title className="card-body1">
              <h5>{js1English.Subject}</h5>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>

            <div className="Topic-Box1">
              <button
                className={`Topic1 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab1")}
              >
                {js1English.Topic1}{" "}
              </button>

              <button
                className={`Topic1 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab1Js1EngTest1")}
              >
                Test 1
              </button>

              <button
                className={`Topic1 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab2Js1EngTest2")}
              >
                Test 2
              </button>

              <button
                className={`Topic1 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab3Js1EngTest3")}
              >
                Test 3
              </button>

              <button
                className={`Topic1 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab4OneToOne")}
              >
                One-To-One
              </button>

              <button
                className={`Topic1 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab5")}
              >
                {js1English.Topic5}
              </button>

              <button
                className={`Topic1 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab6")}
              >
                {js1English.Topic6}
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      {/* card section for PC screen */}
      <div className="Topic-Card">
        <div className="card-body">
          <div
            style={{
              width: "15rem",
              margin: "10px",
              textAlign: "center",
              lineHeight: "10px",
            }}
          >
            <h5>{js1English.Subject}</h5>

            <div className="TopicBox">
              <button
                className={`Topic2 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab1")}
              >
                {js1English.Topic1}
              </button>

              <button
                className={`Topic2 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab1Js1EngTest1")}
              >
                Test 1
              </button>

              <button
                className={`Topic2 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab2Js1EngTest2")}
              >
                Test 2
              </button>

              <button
                className={`Topic2 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab3Js1EngTest3")}
              >
                Test 3
              </button>

              <button
                className={`Topic2 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab4OneToOne")}
              >
                One-To-One
              </button>

              <button
                className={`Topic2 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab5")}
              >
                {js1English.Topic5}
              </button>

              <button
                className={`Topic2 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("Tab6")}
              >
                {js1English.Topic6}
              </button>

              <button
                className={`Topic2 ${activeTab === "Tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("JSS1")}
              >
                {js1English.Topic6}
              </button>

              
            </div>
          </div>
        </div>
      </div>

      {/* page writeup section */}
      <div className="Space-Top"></div>
      <div className="Topic-Writeup">
        <div className="Topic-Page">{tabContent[activeTab]}</div>
      </div>

      <div className="Registered">
        <AccountCircle color="white" fontSize="large" />
        <p>REGISTERED</p>
        <h3>Numbers</h3>
      </div>

      <footer className="footer">
        <div className="foot">
          <div className="foot1">
            <h1>footer</h1>
            <p>ghfjhgfhghghgfhgfghfhgfh yuiuyi ouyiuy </p>
          </div>

          <div className="foot1">
            <h1>footer</h1>
            <p>ghfjhgfhghghgfhgfghfhgfh yuiuyi ouyiuy </p>
          </div>

          <div className="foot1">
            <h1>footer</h1>
            <p>ghfjhgfhghghgfhgfghfhgfh yuiuyi ouyiuy </p>
          </div>

          <div className="foot2">
            <p>
              ICT: SeeloveTechHub Nig. Ltd <br></br>+2348131264231<br></br>©
              2024 <br></br> All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage_Admin;
