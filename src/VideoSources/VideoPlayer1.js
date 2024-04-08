import React, { useState, useRef } from 'react';
import "./VideoPlayer.css"

function VideoPlayer1() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      
      <video className='session-videoplayer' ref={videoRef} controls>
        <source src={require("../Videos.mp4/testVideo.webm")} type="video/mp4" />
      
      </video>
      {/* <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </div>
  );
}

export default VideoPlayer1;



