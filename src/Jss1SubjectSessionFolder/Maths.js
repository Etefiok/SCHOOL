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

const Lightbox = ({ isOpen, onClose, children }) => {
  return (
    <div className={`lightbox ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

const Jss1MathsSessions = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo1 = (VideoPlayer1) => {
    setSelectedVideo(VideoPlayer1);
    setIsVideoOpen(true);
    console.log("VideoPlayer1")
  };

  const openVideo2 = (VideoPlayer2) => {
    setSelectedVideo(VideoPlayer2);
    setIsVideoOpen(true);
    console.log("VideoPlayer2")
  };

  const openVideo3 = (VideoPlayer3) => {
    setSelectedVideo(VideoPlayer3);
    setIsVideoOpen(true);
    console.log("VideoPlayer3")
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsVideoOpen(false);
  };


    return (
        <div className="sessionbody">
<div className="title">
    <p>Mathematics</p>
</div>
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
                    {/* <button onClick={() => openVideo(<VideoPlayer1 />)}>Watch Session 1</button>
        {isVideoOpen && selectedVideo === <VideoPlayer1 /> && (
          <Lightbox isOpen={isVideoOpen} onClose={closeVideo}>
            {selectedVideo}
          </Lightbox>
        )} */}


<button onClick={openVideo1}>Watch Session</button>
          {isVideoOpen && (
            <div className="content" onClick={(e) => e.stopPropagation()}>
            <Lightbox isOpen={isVideoOpen} onClose={closeVideo}>
            <VideoPlayer1 />
          </Lightbox>
              
            </div>
          )}
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
                    <button onClick={openVideo2}>Watch Session</button>
          {isVideoOpen && (
            <div className="content" onClick={(e) => e.stopPropagation()}>
            <Lightbox isOpen={isVideoOpen} onClose={closeVideo}>
            <VideoPlayer2 />
          </Lightbox>
              
            </div>
          )}
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
                    <button onClick={openVideo3}>Watch Session</button>
          {isVideoOpen && (
            <div className="content" onClick={(e) => e.stopPropagation()}>
            <Lightbox isOpen={isVideoOpen} onClose={closeVideo}>
            <VideoPlayer3 />
          </Lightbox>
              
            </div>
          )}
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
                    <button onClick={openVideo1}>Watch Session</button>
          {isVideoOpen && (
            <div className="content" onClick={(e) => e.stopPropagation()}>
            <Lightbox isOpen={isVideoOpen} onClose={closeVideo}>
            <VideoPlayer1 />
          </Lightbox>
              
            </div>
          )}
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
                      <div className="content" onClick={(e) => e.stopPropagation()}>
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
            <div className="content" onClick={(e) => e.stopPropagation()}>
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
