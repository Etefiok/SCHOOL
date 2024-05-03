import React, { useState } from "react";
import "../session.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import VideoPlayer1 from "../VideoSources/VideoPlayer1";
import VideoPlayer2 from "../VideoSources/VideoPlayer2";
import VideoPlayer3 from "../VideoSources/VideoPlayer3";
import Lesson_Slide from "./Lesson_Note";
import Lesson_Note from "./Lesson_Note";






const Lightbox = ({ isOpen, onClose, children }) => {
  
  
  return (
     
    <div className="video-lightbox">
 <div className={`lightbox ${isOpen ? 'open' : ''}`} onClick={onClose}>
                <div className="content" onClick={(e) => e.stopPropagation()}>
                  {children}
                  <button onClick={onClose} className="close-button">X</button>
                </div>
              </div>
    </div> 
  );
};

const SlideButton = ({slideComponent, onOpen}) => {
  const [show, setShow] = useState(false);

  const openSlide = () => {
    setShow(true);
    // setIsVideoOpen(true);
    onOpen(slideComponent);
  };

  const closeSlide = () => {
    // setIsVideoOpen(false);
    setShow(false);
  };

  return (
    <div>
      <VideoLibraryIcon />
      <button onClick={show ? closeSlide : openSlide}>
        {show ? 'Close Slide' : 'Watch Slide'}
      </button>
  
      {show && (
        <Lightbox isOpen={show} onClose={closeSlide}>
          {slideComponent}
        </Lightbox>
      )}
   </div>
  );

};

const ShortNote = ({noteComponent, onOpen}) => {
  const [show, setShow] = useState(false);

  const openNote = () => {
    setShow(true);
    // setIsVideoOpen(true);
    onOpen(noteComponent);
  };

  const closeNote = () => {
    // setIsVideoOpen(false);
    setShow(false);
  };

  return (
    <div>
      <DescriptionIcon />
      <button onClick={show ? closeNote : openNote}>
        {show ? 'Close Note' : 'Open Note'}
      </button>
  
      {show && (
        <Lightbox isOpen={show} onClose={closeNote}>
          {noteComponent}
        </Lightbox>
      )}
   </div>
  );

}


const VideoButton = ({ videoComponent, onOpen }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  // const [isSlideOpen, ]

  const [show, setShow] = useState(false);
  
  const openVideo = () => {
    setShow(true);
    // setIsVideoOpen(true);
    onOpen(videoComponent);
  };

  const closeVideo = () => {
    // setIsVideoOpen(false);
    setShow(false);
  };
  

return (
  <div>
    <VideoLibraryIcon />
    <button onClick={show ? closeVideo : openVideo}>
      {show ? 'Close' : 'Watch Session'}
    </button>

    {show && (
      <Lightbox isOpen={show} onClose={closeVideo}>
        {videoComponent}
      </Lightbox>
    )}
 </div>
);

}



const Jss1MathsSessions = () => {
  const openVideo = (videoComponent) => {
    console.log(`Opening video: ${videoComponent}`);
    // You can perform any other actions related to opening the video here
  };

  const openSlide = (slideComponent) => {
    console.log(`Opening Slide: ${slideComponent}`);
  };

  const openNote = (noteComponent) => {
    console.log(`Opening Note: ${noteComponent}`);
  };

    return (
        <div className="sessionbody">
<div className="title">
    <p>Mathematics</p>
</div>
            <div className="session-title">
                <div>
                  <div className="Note-container">
                    <h6><DescriptionIcon />Your Session Title Here</h6>
                  
                  <div className="Note">
                    <ShortNote noteComponent={<Lesson_Note />} onOpen={openNote} />
                    </div>
                    <div className="Note">
                    <SlideButton slideComponent={<VideoPlayer3 />} onOpen={openSlide} />
                    </div>                  
                  </div>
                </div>
                    <p>Session SubTitle Here</p>
            </div>
            
            <div className="SubSection">
                <div className="icon">
                    <PersonIcon />
                    <p>Instructor's Name</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <EventIcon />                       
                     <p>Date</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <AccessTimeIcon />                    
                    <p> Duration</p><br className="break-gap"/>
                    <p>Instructor</p>
                </div>

                <div>
                <VideoButton videoComponent={<VideoPlayer3 />} onOpen={openVideo} />
                </div>
            </div>

            <div className="empty"></div>

            <div className="session-title">
                    <h6><DescriptionIcon />Your Session Title Here</h6>
                    <p>Session SubTitle Here</p>
            </div>
            <div className="SubSection">
                <div className="icon">
                    <PersonIcon />
                    <p>Instructor's Name</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <EventIcon />                       
                     <p>Date</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <AccessTimeIcon />                    
                    <p> Duration</p><br className="break-gap"/>
                    <p>Instructor</p>
                </div>

                <div>
                <VideoButton videoComponent={<VideoPlayer1 />} onOpen={openVideo} />
  
                </div>
            </div>


            <div className="empty"></div>

            <div className="session-title">
                    <h6><DescriptionIcon />Your Session Title Here</h6>
                    <p>Session SubTitle Here</p>
            </div>
            <div className="SubSection">
                <div className="icon">
                    <PersonIcon />
                    <p>Instructor's Name</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <EventIcon />                       
                     <p>Date</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <AccessTimeIcon />                    
                    <p> Duration</p><br className="break-gap"/>
                    <p>Instructor</p>
                </div>

                <div>
                <VideoButton videoComponent={<VideoPlayer2 />} onOpen={openVideo} />

                </div>
            </div>


            <div className="empty"></div>


            <div className="session-title">
                    <h6><DescriptionIcon />Your Session Title Here</h6>
                    <p>Session SubTitle Here</p>
            </div>
            <div className="SubSection">
                <div className="icon">
                    <PersonIcon />
                    <p>Instructor's Name</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <EventIcon />                       
                     <p>Date</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <AccessTimeIcon />                    
                    <p> Duration</p><br className="break-gap"/>
                    <p>Instructor</p>
                </div>

                <div>
                <VideoButton videoComponent={<VideoPlayer3 />} onOpen={openVideo} />

                </div>
            </div>

            <div className="empty"></div>


            <div className="session-title">
                    <h6><DescriptionIcon />Your Session Title Here</h6>
                    <p>Session SubTitle Here</p>
            </div>
            <div className="SubSection">
                <div className="icon">
                    <PersonIcon />
                    <p>Instructor's Name</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <EventIcon />                       
                     <p>Date</p><br className="break-gap" />
                    <p>Instructor</p>
                </div>

                <div className="icon">                    
                    <AccessTimeIcon />                    
                    <p> Duration</p><br className="break-gap"/>
                    <p>Instructor</p>
                </div>

                <div>
                    <VideoLibraryIcon />
                    {/* <button onClick={openVideo}>Watch Session</button>
                    {isVideoOpen && (
                    <div className="lightbox" onClick={closeVideo}>
                      <div  >
                        <VideoPlayer3 />
                      </div>
                    </div>
                    )} */}
                </div>
            </div>

            <div className="empty"></div>


<div className="session-title">
        <h6><DescriptionIcon />Your Session Title Here</h6>
        <p>Session SubTitle Here</p>
</div>
<div className="SubSection">
    <div className="icon">
        <PersonIcon />
        <p>Instructor's Name</p><br className="break-gap" />
        <p>Instructor</p>
    </div>

    <div className="icon">                    
        <EventIcon />                       
         <p>Date</p><br className="break-gap" />
        <p>Instructor</p>
    </div>

    <div className="icon">                    
        <AccessTimeIcon />                    
        <p> Duration</p><br className="break-gap"/>
        <p>Instructor</p>
    </div>

    <div>
        <VideoLibraryIcon />
        {/* <button onClick={openVideo}>Watch Session</button>
          {isVideoOpen && (
          <div className="lightbox" onClick={closeVideo}>
            <div className="content" >
              <VideoPlayer1 />
            </div>
          </div>
          )} */}
    </div>
</div>

        </div>
    );
};

export default Jss1MathsSessions;
