import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';

const VideoTest = () => {
  const [jss1econssessionPosts, setJss1econssessionPosts] = useState([]);

  useEffect(() => {

    fetchJss1econssessionPosts();
  }, []);

    const fetchJss1econssessionPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/jss1econssession');
        const sortedPosts = response.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setJss1econssessionPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching jss1econssession posts:', error);
      }
    };

    

  return (
    <div>
      {jss1econssessionPosts.map(post => (
        <VideoPlayer key={post._id} post={post} />
      ))}
    </div>
  );
};

const VideoPlayer = ({ post }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='Lesson-Text'>
      <div className='Text-Border'>
        <h3>{post.title}</h3>
        <p>Lecturer: {post.lecturer}</p>
        <p>Topic: {post.topic}</p>

        <video
          // className='session-videoplayer'
          ref={videoRef}
          controls
          // onClick={toggleVideo}
          // style={{ cursor: 'pointer' }}
        >
          <source src={`http://localhost:5000/jss1econssession/${post.video}`} />
          {/* Assuming video field in MongoDB stores the video filename */}
        </video>

        <hr />
        {moment(post.updatedAt).format("MMM D, YYYY [at] h:mm A")}
      </div>
    </div>
  );
};

export default VideoTest;