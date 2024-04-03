import React from "react";
import "./Slider.css";
// import { sliderData } from "./Slider-data";
// import {useState, useEffect} from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from 
// "react-icons/ai";
// import School_Calendar_on_front from "../../School_Calendar_on_front";
// import Mission from "../../MissionFolder/Mission";
// import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


  //for side bar navigation 
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Form from 'react-bootstrap/Form';
// import SignUp from "../../SignUp";



const Slider = () => {


    // const [currentSlide, setCurrentSlide] = useState(0);
    // const slidelength = sliderData.length;
// SlideLength = 1 2 3

  //for side bar navigation 
// const [show, setShow] = useState(false);
// const [value, setValue] = useState('');

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     href="#"
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   >
//     {children}
//     &#x25bc;
//   </a>
// ));


// const Navigate = useNavigate();
    
// function loginuser(){
//     Navigate("/LoginForExams")
// }


// const CustomMenu = React.forwardRef(
//   ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => (
//     <div
//       ref={ref}
//       style={style}
//       className={className}
//       aria-labelledby={labeledBy}
//     >
//       <Form.Control
//         autoFocus
//         className="mx-3 my-2 w-auto"
//         placeholder="Type to filter..."
//         onChange={(e) => setValue(e.target.value)}
//         value={value}
//       />
//       <ul className="list-unstyled">
//         {React.Children.toArray(children).filter(
//           (child) =>
//             !value || child.props.children.toLowerCase().startsWith(value.toLowerCase())
//         )}
//       </ul>
//     </div>
//   )
// );


// const autoScroll = true;
// let slideInterval;
// let intervalTime = 10000;

//     const nextslide = () => {
//         setCurrentSlide(currentSlide === slidelength -1 ? 0 : currentSlide + 1);
//     };


//     const prevslide = () => {
//         setCurrentSlide(currentSlide === 0 ? slidelength - 1: currentSlide - 1 );
//     };


//     function auto() {
//         slideInterval = setInterval(nextslide, intervalTime )
//     }


//     useEffect(() =>{
//         setCurrentSlide(0)
//     }, []);


//     useEffect(() =>{
//         if (autoScroll) {
//             auto();
//         }
//         return () =>clearInterval (slideInterval);
//     }, [currentSlide]);



    // const handleButtonClickIndex0 = () => {
    //     window.location.href = "Library";
    // };
    
    // const handleButtonClickIndex1 = () => {
    //     window.location.href = ("https://www.google.com");
    // };


    return (
        <div className="slider">

<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          // className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/8/82/2009-0617-Ontonagon-school.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="Write-Up-Heading">
          <h5>
            <span>First</span> slide label <br></br>
            <button>Get Started</button>
          </h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block w-100"
          src="https://th.bing.com/th/id/R.2e4f9a711d7f79be125e21701d321875?rik=B2hg%2baf53yWKSg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f8%2f8e%2fStaples_High_School%2c_Westport%2c_CT.jpg&ehk=DQxa8SaDEqX58tggI%2fnzADXWPLs%2f3cLjh6B9AUOcLl8%3d&risl=1&pid=ImgRaw&r=0"
          alt="Second slide"
        />
        <Carousel.Caption className="Write-Up-Heading">
          <h5>
            <span>Second </span>slide label<br></br>
            <button>Get Started</button>
          </h5>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          // className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/3/39/Allatoona_High_School%2C_Cobb_County%2C_Georgia.JPG"
          alt="Third slide"
        />
        <Carousel.Caption className="Write-Up-Heading">
          <h5>
            <span>Third </span> slide label<br></br>
            <button>Get Started</button>
          </h5>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Slider



