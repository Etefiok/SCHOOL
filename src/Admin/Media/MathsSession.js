import React, { useState, useRef, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { jss1MathsSessionPost } from "../../redux/Actions";
import { fetchSessionDetails } from "../../redux/Actions";
import { useCallback } from "react";
import axios from "axios";
// import Modal from 'react-modal';
import { Modal } from "react-bootstrap";
import "./EconomicsSession.css";
import moment from "moment";
import MathsSessionModals from "./MathsSessionModal";





const VideoLightbox = ({ isOpen, onClose, children }) => {
  return (
    <div className={`videoLightbox-lightbox ${isOpen ? 'open' : ''}`}>
      <div className="light" onClick={onClose}>
        <div className="close" onClick={(e) => e.stopPropagation()}>
          {children}
          <button onClick={onClose} className="clossButton">
            X
          </button>
        </div>
      </div>
    </div>
  );
};




const MathsSession = () => {
  const [jss1MathsSessionPosts, setjss1MathsSessionPosts] = useState([]);
  const [isVideo1ModalOpen, setIsVideo1ModalOpen] = useState(false);
  const [isVideo2ModalOpen, setIsVideo2ModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState({});

  const dispatch = useDispatch();
  const { sessionDetails, error, loading } = useSelector((state) => state.login,);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      title: "",
      lecturer: "",
      topic: "",
      content: EditorState.createEmpty(),
      video: null,
      video2: null,
    },
  ]);

  const [formReset, setFormReset] = useState(false); // State to trigger form reset
  const [currentPage, setCurrentPage] = useState(1);

 

  useEffect(() => {
    dispatch(fetchSessionDetails());
  }, [dispatch]);


  useEffect(() => {
    const fetchjss1MathsSessionPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/jss1MathsSession');
        const sortedPosts = response.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setjss1MathsSessionPosts(response.data);
      } catch (error) {
        console.error('Error fetching jss1MathsSession posts:', error);
      }
    };

    fetchjss1MathsSessionPosts();
  }, [currentPage]);



const [totalPages, setTotalPages] = useState(40);
  const recordsPerPage = 20;

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };




  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/auth/jss1MathsSession/${postId}`);
      setjss1MathsSessionPosts(jss1MathsSessionPosts.filter(post => post._id !== postId));
      console.log('Post deleted successfully');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };



  const openVideo1Modal = (video) => {
    setSelectedVideo(video);
    setIsVideo1ModalOpen(true);
  };

  const openVideo2Modal = (video) => {
    setSelectedVideo(video);
    setIsVideo2ModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideo1ModalOpen(false);
    setIsVideo2ModalOpen(false);
    setSelectedVideo(null);
  };

  const handleTitleChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].title = value;
      return updatedQuestions;
    });
  };

  

  const handleLecturerChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].lecturer = value;
      return updatedQuestions;
    });
  };

  const handleTopicChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].topic = value;
      return updatedQuestions;
    });
  };

  const handleVideoChange = (index, file) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].video = URL.createObjectURL(file);
      return updatedQuestions;
    });
  };

  const handleVideoChange2 = (index, file) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].video2 = URL.createObjectURL(file);
      return updatedQuestions;
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (currentQuestionIndex === questions.length - 1) {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        {
          title: "",
          lecturer: "",
          topic: "",
          content: EditorState.createEmpty(),
          video: null,
          video2: null,
        },
      ]);
    }
    
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handlePostQuestions = async () => {
    try {
      // Prepare formData from questions state
      const formData = questions.map((question) => ({
        title: question.title,
        lecturer: question.lecturer,
        topic: question.topic,
        content: draftToHtml(convertToRaw(question.content.getCurrentContent())),
        video: question.video,
        video2: question.video2,
        // Add more fields as needed
      }));

      // Dispatch action to post questions
      const response = dispatch(jss1MathsSessionPost(formData));

      // Handle success or further logic here if needed
      console.log("Questions posted:", response);
      setFormReset(true);
      // resetForm();
    } catch (error) {
      console.error("Error posting questions:", error);
      // Handle error state or display error message to user
    }
  };

  const onEditorStateChange = (editorState) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[currentQuestionIndex].content = editorState;
      return updatedQuestions;
    });
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionHtml = draftToHtml(
    convertToRaw(currentQuestion.content.getCurrentContent())
  );

  const handleDeleteQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(index, 1);
      return updatedQuestions;
    });
    if (currentQuestionIndex === index) {
      setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

 // Function to reset the form
 const resetForm = useCallback(() => {
  setQuestions([
    {
      title: "",
      lecturer: "",
      topic: "",
      content: EditorState.createEmpty(),
      video: null,
      video2: null,
    },
  ]);
  setCurrentQuestionIndex(0);
  setFormReset(true);
}, []);

useEffect(() => {
  // Reset form state after formReset is set to true
  if (formReset) {
    resetForm();
    setFormReset(false);
  }
}, [formReset, resetForm]);



   // Check if any field in the current question is filled
  const isCurrentQuestionFilled =
  currentQuestion.title ||
  currentQuestion.lecturer ||
  currentQuestion.topic ||
  currentQuestion.video ||
  currentQuestion.video2 ||
  currentQuestion.content.getCurrentContent().hasText();
  

  const handleModalOpen = (index) => {
    setShowModal({ ...showModal, [index]: true });
  };

  const handleModalClose = (index) => {
    setShowModal({ ...showModal, [index]: false });
  };


 

  return (
    <div>
      <h1>MATHEMATICS SESSION</h1>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.title}
              onChange={(e) =>
                handleTitleChange(currentQuestionIndex, e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Lecturer</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.lecturer}
              onChange={(e) =>
                handleLecturerChange(currentQuestionIndex, e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.topic}
              onChange={(e) =>
                handleTopicChange(currentQuestionIndex, e.target.value)
              }
            />
          </Form.Group>
          <div className="VideoContainer">
            <div className="Video-Image">
              <Form.Group>
                <Form.Label>Slide</Form.Label>
                <Form.Control
                  type="file"
                  accept="video/*"
                  onChange={(e) =>
                    handleVideoChange(currentQuestionIndex, e.target.files[0])
                  }
                />
              </Form.Group>
            </div>
            <div className="Video-Image">
              <Form.Group>
                <Form.Label>Video</Form.Label>
                <Form.Control
                  type="file"
                  accept="video/*"
                  onChange={(e) =>
                    handleVideoChange2(currentQuestionIndex, e.target.files[0])
                  }
                />
              </Form.Group>
            </div>
          </div>
          <Editor
            placeholder="Your Lecture Content here:"
            editorState={currentQuestion.content}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName="toolbar-class"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbar={{
              options: [
                "inline",
                "blockType",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "embedded",
                "emoji",
                "image",
                "remove",
                "history",
              ],
            }}
          />
        </Form>
      </div>
      <div className="All-Button">
        <Button onClick={handlePreviousQuestion}>Previous</Button>
        <Button onClick={handleNextQuestion}>Next</Button>
        {isCurrentQuestionFilled && (
          <>
        <Button onClick={handlePostQuestions}>Post</Button>
        </>
        )}
      </div>
      <div className="Preview-Section">
        <div>
          <h2>Preview</h2>
          <div className="Correct-Answer">
            <p>Number of pages: {questions.length}</p>
            <p>Title: {currentQuestion.title}</p>
            <p>Lecturer: {currentQuestion.lecturer}</p>
          </div>
          {currentQuestion.video && (
            <div>
              <h3>Video</h3>
              <video
                src={currentQuestion.video}
                controls
                style={{ maxWidth: "40%", width: "100%", height: "auto" }}
              />
            </div>
          )}
          {currentQuestion.video2 && (
            <div>
              <h3>Slide</h3>
              <video
                src={currentQuestion.video2}
                controls
                style={{ maxWidth: "40%", width: "100%", height: "auto" }}
              />
            </div>
          )}
          {currentQuestion.image && (
            <div>
              <h3>Image:</h3>
              <img
                src={currentQuestion.image}
                alt="Quiz"
                style={{ maxWidth: "40%", width: "100%", height: "auto" }}
              />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: currentQuestionHtml }} />
        </div>
        {isCurrentQuestionFilled && (
        <div className="Delete-Post">
        <Button onClick={handlePostQuestions}>Post</Button>
        <Button variant="danger" onClick={() => handleDeleteQuestion(currentQuestionIndex)}>
              Delete
            </Button>

        </div>
        )}
      </div>
      <h1>Session Details</h1>
      <hr />
      {jss1MathsSessionPosts && jss1MathsSessionPosts.length > 0 ? (
        
        <div className="Details-Section"> 
      {/* {jss1MathsSessionPosts.map((post, index) => (  */}
         {jss1MathsSessionPosts.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage).map((post, index) => (
        <div key={index} className="alert-card">
          {index >= (currentPage - 1) * recordsPerPage && index < currentPage * recordsPerPage && (
      <>
      
         <span className="Alert-Order" >
          <p>title: {post.title}</p>
          </span>

          <span className="Alert-Order" >
          <p>Lecturer: {post.lecturer}</p>
          </span>

          <span className="Alert-Order" >
          <p>Topic: {post.topic}</p>
          </span>

          <span onClick={() => handleModalOpen(index)} className="Alert-content" >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </span>
          <div className="Alert-Order" >
          <Button onClick={() => openVideo1Modal(post.video)}>Slide</Button>
          </div>
          <div className="Alert-Order">
          <Button onClick={() => openVideo2Modal(post.video2)}>Video</Button>
          </div>

          <span className="Alert-Order" >
          <p>{moment(post.updatedAt).format("MMM, YY Y, [AT] h:mm A")}</p>
          </span>


          <div className="Alert-actions">
          <Button variant="danger" onClick={() => handleDeletePost(post._id)}>
            Delete
          </Button>
          </div>
          
          <MathsSessionModals
            show={showModal[index] || false}
            onHide={() => handleModalClose(index)}
            // title={post.title}
            content={post.content}
            updatedAt={post.updatedAt}
          />
</>
      )}
        </div>
        
      ))}
      
      </div>

) : (
  <p>Loading ...</p>
)}

<nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={prePage}>
              Prev
            </button>
          </li>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => changeCPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
          {totalPages > 5 && (
            <li className="page-item disabled">
              <button className="page-link">...</button>
            </li>
          )}
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
        <div>Total Pages: {totalPages}</div>
      </nav>

      <VideoLightbox isOpen={isVideo1ModalOpen} onClose={closeVideoModal}>
        {selectedVideo && (
          <video controls src={selectedVideo} style={{ width: '100%', height: 'auto' }} />
        )}
      </VideoLightbox>

      <VideoLightbox isOpen={isVideo2ModalOpen} onClose={closeVideoModal}>
        {selectedVideo && (
          <video controls src={selectedVideo} style={{ width: '100%', height: 'auto' }} />
        )}
      </VideoLightbox>
    </div>
  );
};

export default MathsSession;
