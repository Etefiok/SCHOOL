import React, { useState, useRef } from 'react';

function VideoPlayer2() {
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
      <source src={require("../Videos.mp4/TestVideo2.webm")} type="video/mp4" />

      </video>
      {/* <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </div>
  );
}

export default VideoPlayer2;