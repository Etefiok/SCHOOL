import React, { useState, useRef, useEffect } from "react";
import "./VideoPlayer.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import moment from "moment";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PrivateChat from "../ChatRoom/PrivateChat";
import AttachmentIcon from '@mui/icons-material/Attachment';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoPlayer3 = ({ content, updatedAt, video, video2, title, topic  }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState("");
  const [totalComments, setTotalComments] = useState(0);

  const [showPrivateChat, setShowPrivateChat] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const User = useSelector((state) => state.login.user)

  const handleUsernameClick = (userId) => {
    setSelectedUserId(userId);
    setShowPrivateChat(true);
  };

  const [replyTexts, setReplyTexts] = useState({});
  const [commentsWithReplyInput, setCommentsWithReplyInput] = useState([]);

  const handleReplyButtonClick = (commentId) => {
    setCommentsWithReplyInput((prevComments) => [...prevComments, commentId]);
  };

  const handleReplyChange = (event, commentId) => {
    setReplyTexts({ ...replyTexts, [commentId]: event.target.value });
  };

  const handleReplySubmit = async (event, commentId) => {
    event.preventDefault();
    const replyText = replyTexts[commentId];
    if (replyText.trim() !== "") {
      try {
        const response = await axios.post(
          `http://localhost:5000/auth/comments/${commentId}/replies`,
          {
            content: replyText,
            Username: user.Username,
          }
        );
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  replies: [...(comment.replies || []), response.data],
                  showReplyInput: false,
                }
              : comment
          )
        );
        setReplyTexts({ ...replyTexts, [commentId]: "" });
        setCommentsWithReplyInput(
          commentsWithReplyInput.filter((id) => id !== commentId)
        );
      } catch (error) {
        console.error("Error submitting reply:", error);
      }
    }
  };

  useEffect(() => {
    fetchComments();
    fetchUsername();
    fetchTotalComments();
  }, []);
  


  

  const fetchComments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/comments");
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const fetchTotalComments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/auth/comments/count"
      );
      setTotalComments(response.data.totalComments);
    } catch (error) {
      console.error("Error fetching total comments:", error);
    }
  };

  const fetchUsername = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/auth/welcomeuser"
      );
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/comments",
          { content: newComment, Username: username }
        );
        setComments([response.data, ...comments]);
        setNewComment("");
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };



  return (
    <div>
      <video className="session-videoplayer" ref={videoRef} controls>
        <source
          src={video2}
          type="video/mp4"
        />
        
      </video>
      

      <div className="Commenting">
        <>
        
          <div className="total-Comment-Container">
            <Button variant="primary" onClick={() => setShow(true)}>
              Comments:
            </Button>
            <div className="Comment-Line">
              <h6>{totalComments}</h6>
              <h6 className="titleBox">|| {title} ||</h6>
              {/* <button onClick={handlePlayPause}>play</button> */}
              <h6 className="titleBox">|| {topic} ||</h6>
            </div>
          </div>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            {/* <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Comment
              </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
            <div class="comment-section">            
                  <div className="ChatBox">
                  {comments.map((comment) => (
                    <div key={comment._id} className="comment-item">
                      <div className="comment-username">
                        <span
                          onClick={() => handleUsernameClick(comment.userId)}
                        >
                          {User.Username}:
                        </span>
                        <p>
                          {moment(comment.createdAt).format(
                            "MMM D, YYYY [at] h:mm A"
                          )}
                        </p>
                      </div>
                      <div className="comment-body">
                        <p>{comment.content}</p>
                        <div className="reply-section">
                          {comment.showReplyInput ? (
                            <form
                              onSubmit={(event) =>
                                handleReplySubmit(event, comment._id)
                              }
                            >
                              <AttachmentIcon fontSize="large" color="primary" />
                              <textarea
                              
                                value={replyTexts[comment._id] || ""}
                                onChange={(event) =>
                                  handleReplyChange(event, comment._id)
                                }
                                placeholder="Reply..."
                                rows="2"
                              ></textarea>
                              <div className="Reply-button">
                                <button type="submit">Reply</button>
                              </div>
                            </form>
                          ) : (
                            <button
                              onClick={() =>
                                handleReplyButtonClick(comment._id)
                              }
                            >
                              Reply
                            </button>
                          )}
                          {comment.replies &&
                            comment.replies.map((reply) => (
                              <div key={reply._id} className="reply-item">
                                <div className="reply-username">
                                  <span
                                    onClick={() =>
                                      handleUsernameClick(reply.userId)
                                    }
                                  >
                                    {reply.Username}:
                                  </span>
                                  <p>
                                    {moment(reply.createdAt).format(
                                      "MMM D, YYYY [at] h:mm A"
                                    )}
                                  </p>
                                </div>
                                <div className="reply-body">
                                  <p>{reply.content}</p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>

                  <form onSubmit={handleCommentSubmit}> 
                    <textarea 
                        value={newComment} 
                        onChange={handleCommentChange} 
                        placeholder="" rows="3" 
                        > 
                        
                    </textarea> 
                    <div className="send">  
                        <div className="sendd"> 
                           <button type="submit">
                          <img src={require("../images.jpg/media_message.png")} alt="messager icon"/>
                          </button> 
                        </div> 
                        <div className="sendd">
                          <Modal.Header closeButton></Modal.Header>
                      </div> 
                      </div>
                </form>                   
              </div>
            </Modal.Body>
          </Modal>
        </>
      </div>
      {showPrivateChat && selectedUserId && (
        <PrivateChat
          userId={user.id}
          username={user.Username}
          receiverId={selectedUserId}
        />
      )}
    </div>
  );
}

export default VideoPlayer3;
