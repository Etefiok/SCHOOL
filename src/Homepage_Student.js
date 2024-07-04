import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar_out from "./NavBar_out";
import "./Homepage.css";
import Notification from './Notification/notification';
import Slider from './SliderComponent/Slider/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ImageSlide from './ImageSlideFolder/ImageSlide';
import { AccountCircle } from '@mui/icons-material';
import Mission from './MissionFolder/Mission';
import NavBar_Student from './NavBar_Student';
import Dictionary from './ImageSlideFolder/Dictionary/Dictionary';
import JAMB_Recomended_TextBook from './JAMB_Recomended_TestBook';
import Cookies from 'js-cookie';
import Daily_Quiz from './Notification/Daily_Quiz';

// import { useSelector } from 'react-redux';

import { useDispatch, useSelector } from 'react-redux';

const HomePage_Student = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/Login_Student'); // Redirect to login if not logged in
    }
  }, [isLoggedIn, navigate]);


// const HomePage_Student =() => {
//   const navigate = useNavigate();


  return (
    <div className='Homepage'>

      <nav className='NavBarFloat'>
        <NavBar_Student />
      </nav>
 
    <Daily_Quiz />
    {/* <Notification /> */}
    <Slider />
    <Mission />
    <ImageSlide />
    
    {/* <Dictionary /> */}
    <JAMB_Recomended_TextBook />


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
       <button>Know More</button>
        </div> 
    </div>



<div className='Registered'>
    <AccountCircle color="white" fontSize="large" />
    <p>REGISTERED</p>
    <h3>Numbers</h3>
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

export default HomePage_Student


