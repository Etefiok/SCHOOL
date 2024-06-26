import React, { useState, useEffect, useRef } from 'react';
import NavBar_out from "./NavBar_out";
import "./Homepage.css";
import { Container } from "react-bootstrap";
import Notification from './Notification/notification';
import Slider from './SliderComponent/Slider/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ImageSlide from './ImageSlideFolder/ImageSlide';
import { AccountCircle } from '@mui/icons-material';
import Mission from './MissionFolder/Mission';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import School_Calendar_on_front from './School_Calendar_on_front';
import JAMB_Recomended_TextBook from './JAMB_Recomended_TestBook';
import axios from 'axios';



const HomePage_out =({ users}) => {
    
  
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);
    const totalSlides = 3;

  const plusSlides = (value) => {
      const newSlide = currentSlide + value;
  
      if (newSlide >= 0 && newSlide < totalSlides) {
        setCurrentSlide(newSlide);
      }
    };
  
    const showSlides = (n) => {
      let i;
      let slides = document.getElementsByClassName('mySlides');
      let dots = document.getElementsByClassName('dot');
      
      if (n > slides.length) {
        setCurrentSlide(1);
      }
      
      if (n < 1) {
        setCurrentSlide(slides.length);
      }
  
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
  
      slides[currentSlide - 1].style.display = "block";
      dots[currentSlide - 1].className += " active";
    };

    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const handlePrevYear = () => {
      setSelectedYear(selectedYear - 1);
    };
  
    const handleNextYear = () => {
      setSelectedYear(selectedYear + 1);
    };


  //for side bar navigation 
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');
  
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

    <div className='Homepage'>

      <nav className='NavBarFloat'>
        <NavBar_out />
      </nav>
 
      
      <Notification />
    <Slider />
    <Mission />
    <ImageSlide />
    <br></br>
    <JAMB_Recomended_TextBook />

    <div className='calender'>
            <>
                <button onClick={handleShow}>School Calendar</button>
                <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                {/* <Offcanvas.Title>Sign Up</Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Dropdown className='Dropdown'>    
                <School_Calendar_on_front />
                </Dropdown>
              </Offcanvas.Body>
            </Offcanvas>
          </>
    </div>

    {/* <ImageSlide /> */}


    <div className='activities-container'>
        <img src= {require("./images.jpg/award2.jpg")} />
        <div className='activities-1-text'>
        <strong>SCHOOL ACTIVITIES </strong><br></br>
        <p>klfdlknvownivowinviin wfiwrofi wpirhwir wpijwpogwp pwog wpogjp pw vowinvowinoivnin invowinoivnwoinvi dggerer ertert ert ert  poubkjd wufubcubcwi wufwiubv
         fveiurb8ijrtk4fiu eruifho48fn34io4ufno o4ofnoinoino oirhgo8eonvoui orgh89</p>
       <button>Know More</button>
        </div> 
    </div>

    <div className='activities-container0'>
        <img src= {require("./images.jpg/award2.jpg")} />
        <div className='activities-1-text0'>
        <strong>SCHOOL ACTIVITIES </strong><br></br>
        <p>klfdlknvownivowinviin wfiwrofi wpirhwir wpijwpogwp pwog wpogjp pw vowinvowinoivnin invowinoivnwoinvi dggerer ertert ert ert  poubkjd wufubcubcwi wufwiubv
         fveiurb8ijrtk4fiu eruifho48fn34io4ufno o4ofnoinoino oirhgo8eonvoui orgh89</p>
       <Button>Know More</Button>
        </div> 
    </div>



<div className='Registered'>
    <AccountCircle color="white" fontSize="large" />
    <p>REGISTERED</p>
    <h3>0</h3>
</div>

      <footer className='footer'>
        <div className='foot'>
            <div className='foot1'>
            <h1>footer</h1>
            <p>ghfjhgfhghghgfhgfghfhgfh yuiuyi ouyiuy </p>
            </div>

            <div className='foot1'>
            <h1>footer</h1>
            <p>ghfjhgfhghghgfhgfghfhgfh yuiuyi ouyiuy </p>
            </div>

            <div className='foot1'>
            <h1>footer</h1>
            <p>ghfjhgfhghghgfhgfghfhgfh yuiuyi ouyiuy </p>
            </div>

            <div className='foot2'>
            <p>ICT: SeeloveTechHub Nig. Ltd <br></br>+2348131264231<br></br>© 2024 <br></br> All Rights Reserved</p>

            </div>

        </div>
     </footer>


 
      </div>
      // </div>
    
  );
}

export default HomePage_out



// useEffect(() => {
//   const fetchUserCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/auth/count');
//       setUserCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching user count:', error);
//     }
//   };

//   fetchUserCount();
// }, []);


