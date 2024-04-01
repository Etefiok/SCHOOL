import React, { useState, useRef } from 'react';

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
      <video ref={videoRef} width="400" controls>
        {/* <source src={require("../Videos/video.mp4")} type="video/mp4" /> */}
      
      </video>
      {/* <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </div>
  );
}

export default VideoPlayer1;



