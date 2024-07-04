import React, { useState, useEffect } from "react";
import "../session.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoPlayer1 from "../VideoSources/VideoPlayer1";
import VideoPlayer2 from "../VideoSources/VideoPlayer2";
import VideoPlayer3 from "../VideoSources/VideoPlayer3";
import Lesson_Slide from "./Lesson_Note";
import Lesson_Note from "./Lesson_Note";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


import { useDispatch, useSelector } from "react-redux";
import { fetchSessionDetails } from "../redux/Actions";
// import { fetchSessionDetails } from "../../redux/Actions";
import { useCallback } from "react";
import axios from "axios";
import "../Admin/Media/EconomicsSession.css";
import moment from "moment";
// import EconomicsSessionModals from "./EconomicsSessionModal";



const Lightbox = ({ isOpen, onClose, children }) => {

  return (
    // <div className="Comment">
      <div className="video-lightbox">
          <div className={`lightbox ${isOpen ? "open" : ""}`} onClick={onClose}>
            <div className="content" onClick={(e) => e.stopPropagation()}>
              {children}
              <button onClick={onClose} className="close-button">
                X
              </button>
            </div>
          </div>
      </div>
      // </div>
        

  );
};


const SlideButton = ({ slideComponent, onOpen }) => {
  const [show, setShow] = useState(false);

  const openSlide = () => {
    setShow(true);
    // setIsVideoOpen(true);
    // onOpen(slideComponent);
  };

  const closeSlide = () => {
    // setIsVideoOpen(false);
    setShow(false);
  };

  return (
    <div>
      <VideoLibraryIcon />
      <button onClick={show ? closeSlide : openSlide}>
        {show ? "Close Slide" : "Watch Slide"}
      </button>

      {show && (
        <Lightbox isOpen={show} onClose={closeSlide}>
          {slideComponent}
        </Lightbox>
      )}
    </div>
  );
};

const ShortNote = ({ noteComponent, onOpen }) => {
  const [show, setShow] = useState(false);

  const openNote = () => {
    setShow(true);
    // setIsVideoOpen(true);
    // onOpen(noteComponent);
  };

  const closeNote = () => {
    // setIsVideoOpen(false);
    setShow(false);
  };

  return (
    <div>
      <DescriptionIcon />
      <button onClick={show ? closeNote : openNote}>
        {show ? "Close Note" : "Open Note"}
      </button>

      {show && (
        <Lightbox isOpen={show} onClose={closeNote}>
          {noteComponent}
        </Lightbox>
      )}
    </div>
  );
};

const VideoButton = ({ videoComponent, onOpen }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  // const [isSlideOpen, ]

  const [show, setShow] = useState(false);

  const openVideo = () => {
    setShow(true);
    // setIsVideoOpen(true);
    // onOpen(videoComponent);
  };

  const closeVideo = () => {
    // setIsVideoOpen(false);
    setShow(false);
  };

  return (
    <div>
      <VideoLibraryIcon />
      <button onClick={show ? closeVideo : openVideo}>
        {show ? "Close Session" : "Watch Session"}
      </button>

      {show && (
        <Lightbox isOpen={show} onClose={closeVideo}>
          {videoComponent}
        </Lightbox>
      )}
    </div>
  );
};

const Jss1_Economics_Sessions = () => {

  const [jss1econssessionPosts, setjss1econssessionPosts] = useState([]);
  const [isVideo1ModalOpen, setIsVideo1ModalOpen] = useState(false);
  const [isVideo2ModalOpen, setIsVideo2ModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState({});
  const dispatch = useDispatch();
  const { sessionDetails, error, loading } = useSelector((state) => state.login);

  

  const [formReset, setFormReset] = useState(false); // State to trigger form reset
  const [currentPage, setCurrentPage] = useState(1);

 

  useEffect(() => {
    dispatch(fetchSessionDetails());
  }, [dispatch]);


  useEffect(() => {
    const fetchjss1econssessionPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/jss1econssession');
        const sortedPosts = response.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        console.log({sortedPosts})
        setjss1econssessionPosts(sortedPosts);
       } catch (error) {
        console.error('Error fetching jss1econssession posts:', error);
      }
    };

    fetchjss1econssessionPosts();
  }, [currentPage]);

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
        <p>Economics</p>
      </div>

      {jss1econssessionPosts.map((post, index) => (
          
          <div key={post._id} >
      <div className="session-title">
        <div>
          <div className="Note-container">
            <div className="Note-title">
            <p>
              <DescriptionIcon />
              Title: {post.title}
            </p>
              <p>Topic: {post.topic}</p>
            </div>
            <div className="Note">
              <ShortNote noteComponent={<Lesson_Note 
               content={post.content}
               updatedAt={post.updatedAt}
              />}/>
            </div>
            <div className="Note">
              <SlideButton slideComponent={<VideoPlayer3
              topic={post.topic} 
              title={post.title}
              // content={post.content}
              video={`http://localhost:5000/auth/jss1econssession/${post.video}`}

              updatedAt={post.updatedAt}
              />}/>
            </div> 
            <div className="Note">
          <VideoButton videoComponent={<VideoPlayer2 
          topic={post.topic} 
          title={post.title}
          // content={post.video2}
          video2={post.video2}
          updatedAt={post.updatedAt}
          />} onOpen={openVideo} />
        </div>           
          </div>          
        </div>        
      </div>

      
      <div className="SubSection">
        <div className="icon">
          <PersonIcon />
          <br className="break-gap" />
          <p>{post.lecturer}</p>
        </div>

        <div className="icon">
          <EventIcon />
          <p>Date</p>
          <br className="break-gap" />
          <p>{moment(post.updatedAt).format("MMM, YY Y, [AT] h:mm A")}</p>

        </div>

        <div className="icon">
          <AccessTimeIcon />
          <p> Duration</p>
          <br className="break-gap" />
          <p>Instructor</p>
        </div>
        
      </div>
      <div className="empty"></div>
</div>

      ))}
      

   
    </div>
  );
};

export default Jss1_Economics_Sessions;


