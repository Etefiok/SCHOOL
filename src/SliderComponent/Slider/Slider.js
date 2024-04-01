import React from "react";
import "./Slider.css";
import { sliderData } from "./Slider-data";
import {useState, useEffect} from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 
"react-icons/ai";
import School_Calendar_on_front from "../../School_Calendar_on_front";
import Mission from "../../MissionFolder/Mission";
import { useNavigate } from 'react-router-dom';

  //for side bar navigation 
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import SignUp from "../../SignUp";



const Slider = () => {


    const [currentSlide, setCurrentSlide] = useState(0);
    const slidelength = sliderData.length;
// SlideLength = 1 2 3

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


const Navigate = useNavigate();
    
function loginuser(){
    Navigate("/LoginForExams")
}


const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => (
    <div
      ref={ref}
      style={style}
      className={className}
      aria-labelledby={labeledBy}
    >
      <Form.Control
        autoFocus
        className="mx-3 my-2 w-auto"
        placeholder="Type to filter..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <ul className="list-unstyled">
        {React.Children.toArray(children).filter(
          (child) =>
            !value || child.props.children.toLowerCase().startsWith(value.toLowerCase())
        )}
      </ul>
    </div>
  )
);


const autoScroll = true;
let slideInterval;
let intervalTime = 10000;

    const nextslide = () => {
        setCurrentSlide(currentSlide === slidelength -1 ? 0 : currentSlide + 1);
    };


    const prevslide = () => {
        setCurrentSlide(currentSlide === 0 ? slidelength - 1: currentSlide - 1 );
    };


    function auto() {
        slideInterval = setInterval(nextslide, intervalTime )
    }


    useEffect(() =>{
        setCurrentSlide(0)
    }, []);


    useEffect(() =>{
        if (autoScroll) {
            auto();
        }
        return () =>clearInterval (slideInterval);
    }, [currentSlide]);



    const handleButtonClickIndex0 = () => {
        window.location.href = "Library";
    };
    
    const handleButtonClickIndex1 = () => {
        window.location.href = ("https://www.google.com");
    };


    return (
        <div className="slider">
            <AiOutlineArrowLeft className='arrow prev' onClick={prevslide}/>
            <AiOutlineArrowRight className='arrow next' onClick={nextslide} />

            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="" />
                                
                               
                                <div className="content">
                                    <h4>{slide.heading}</h4>
                                    {/* <p>{slide.desc}</p> */}
                                    <hr />
                                    {index === 0 ? (
                                        <button className="btn btn-primary" onClick={handleButtonClickIndex0}>Get Started1</button>
                                    ) : index === 1 ? (
                                        <button className="btn btn-primary" onClick={handleButtonClickIndex1}>Get Started2</button>
                                    ) : index === 2 ? (
                                        <button className="btn btn-primary" onClick={() => { window.location.href = "./Library"; }}>Get Started3</button>
                                    ) : null}

                                </div>
                            </>
                        )}

                    </div>
                )
            })}
        </div>
    )
}

export default Slider