import React, { useState, useRef, useEffect } from "react";
import "./VideoPlayer.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import moment from "moment";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function VideoPlayer3() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState('');
  const [totalComments, setTotalComments] = useState(0);

  

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
      const response = await axios.get('http://localhost:5000/auth/comments/count');
      setTotalComments(response.data.totalComments);
    } catch (error) {
      console.error('Error fetching total comments:', error);
    }
  };

  const fetchUsername = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/welcomeuser");
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
        const response = await axios.post("http://localhost:5000/auth/comments",
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
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <video className="session-videoplayer" ref={videoRef} controls>
        <source
          src={require("../Videos.mp4/TestVideo3.webm")}
          type="video/mp4"
        />
      </video>
      {/* <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}

      <div className="Comment">
        <>
        <div className="total-Container">
          <Button variant="primary" onClick={() => setShow(true)}>
            Comments:
            
            <div className="total-Comment">
            {totalComments}
            </div>
          </Button>         
          </div>

          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Comment
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="comment-section">
                {/* <h2>Comment</h2> */}
                <form onSubmit={handleCommentSubmit}>
                  <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder=""
                    rows="3"
                  ></textarea>
                  <button type="submit">Send</button>
                </form>
                <div>
                  {comments.map((comment) => (
                    <div key={comment._id} class="comment-item">
                      <div className="comment-username">
                      <span>{user.Username}:</span>
                      <p>
                          {moment(comment.createdAt).format(
                          "MMM D, YYYY [at] h:mm A"
                        )}
                      </p>
                      </div>
                      <div className="comment-body">
                      <p>{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

             
            </Modal.Body>
          </Modal>
        </>
      </div>
    </div>
  );
}

export default VideoPlayer3;
