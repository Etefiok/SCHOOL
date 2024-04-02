import React from "react";
import { useState } from "react";
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
        </div>
      </div>
    );
  };

const Jss1MathsSessions = () => {
    // const navigate = useNavigate();

    // function videoPlayer1() {
    //     navigate("/VideoPlayer1");
    // }const [isVideoOpen, setIsVideoOpen] = useState(false);

    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);


    const openVideo = (video) => {
    setSelectedVideo(video);
    setIsVideoOpen(true);
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
                    <button onClick={() => openVideo(<VideoPlayer1 />)}>Watch Session</button>
        {isVideoOpen && selectedVideo === <VideoPlayer1 /> && (
          <Lightbox isOpen={isVideoOpen} onClose={closeVideo}>
            {selectedVideo}
          </Lightbox>
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
                    <button onClick={() => openVideo(<VideoPlayer1 />)}>Watch Session</button>
        {isVideoOpen && selectedVideo === <VideoPlayer2 /> && (
          <Lightbox isOpen={isVideoOpen} onClose={closeVideo}>
            {selectedVideo}
          </Lightbox>
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
                    <button onClick={() => openVideo(<VideoPlayer1 />)}>Watch Session</button>
        {isVideoOpen && selectedVideo === <VideoPlayer3 /> && (
          <Lightbox isOpen={isVideoOpen} onClose={closeVideo}>
            {selectedVideo}
          </Lightbox>
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
                    <button onClick={openVideo}>Watch Session</button>
          {isVideoOpen && (
            <div className="lightbox" onClick={closeVideo}>
              <div className="content" onClick={(e) => e.stopPropagation()}>
                <VideoPlayer1 /> 
              </div>
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
                    <button onClick={openVideo}>Watch Session</button>
          {isVideoOpen && (
            <div className="lightbox" onClick={closeVideo}>
              <div className="content" onClick={(e) => e.stopPropagation()}>
                <VideoPlayer1 /> 
              </div>
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
        <button onClick={openVideo}>Watch Session</button>
{isVideoOpen && (
<div className="lightbox" onClick={closeVideo}>
  <div className="content" onClick={(e) => e.stopPropagation()}>
    <VideoPlayer1 />
  </div>
</div>
)}
    </div>
</div>


        </div>
    );
};

export default Jss1MathsSessions;
