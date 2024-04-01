import React from 'react';
import './StarBlink.css';

const StarBlink = () => {
  return (
    <div>
      <p>Here's a button surrounded by blinking stars:</p>
      <div className="blinking-stars">
        <button>Click me!</button>
      </div>
    </div>
  );
}

export default StarBlink;
