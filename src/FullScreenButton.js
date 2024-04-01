import React, { useEffect } from 'react';

function FullScreenButton() {
  const handleFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.key === 'F11' || event.key === 'Escape') && document.fullscreenElement) {
        event.preventDefault();
      }
    };

    

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <button onClick={handleFullScreen}>
      Full Screen
    </button>
  );
}

export default FullScreenButton;
