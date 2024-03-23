import React, { useState, useEffect, useRef } from 'react';
import NavBar_out from "./NavBar_out";
import "./Homepage.css";
import Notification from './notification';
import Slider from './SliderComponent/Slider/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import ImageSlide from './ImageSlideFolder/ImageSlide';
import { AccountCircle } from '@mui/icons-material';



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



  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };


  return (
    <div>

      <nav className='NavBarFloat'>
        <NavBar_out />
      </nav>
 
      
    <Notification />
    <Slider />
    <ImageSlide />



    <div className='herotext'>
    {/* <FontAwesomeIcon icon={faUser} /> */}
    
      
      <p><h2><FontAwesomeIcon icon={faInfoCircle} /> ABOUT US</h2>[School Name] is a leading secondary school focused on academic excellence, character development, and community engagement. They aim to empower students to become critical thinkers and responsible global citizens through a comprehensive education. With high academic standards, holistic development programs, dedicated faculty, state-of-the-art facilities, and a variety of extracurricular activities, the school provides a nurturing environment for students to excel. For admission inquiries or general information, contact the admissions office at [Contact Number] or visit their website.</p>
</div>

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

export default HomePage_out


