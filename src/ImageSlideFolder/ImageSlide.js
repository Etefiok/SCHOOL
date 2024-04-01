import React from "react";
import './ImageSlide.css';



function ImageSlide() {
    return(
        
<div>
      <div className='image-container'>
        <button className='image'>
          <img src={require("../images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        
      </div>
</div>

    )
}

export default ImageSlide