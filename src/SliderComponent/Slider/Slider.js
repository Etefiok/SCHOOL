import React from "react";
import "./Slider.css";
import { sliderData } from "./Slider-data";
import {useState, useEffect} from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 
"react-icons/ai";
import School_Calendar_on_front from "../../School_Calendar_on_front";



const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidelength = sliderData.length;
// SlideLength = 1 2 3


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
        window.location.href = "";
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

                                <div className='calender'>
                                    <School_Calendar_on_front />
                                </div>

                                <div className="content">
                                    <h4>{slide.heading}</h4>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    {index === 0 ? (
                                    <button className="btn btn-primary" onClick={handleButtonClickIndex0}>Get Started1</button>
                                ) : index === 1 ? (
                                    <button className="btn btn-primary" onClick={() => { window.location.href = "www.google.com"; }}>Get Started2</button>
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