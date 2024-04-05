import React from "react";
import './ImageSlide.css';



function ImageSlide() {
    return(
        
<div className="over_container">
<p className="Usefull">Test Books</p>
      <div className='image-container'>
        {/* <div>
        <p>Usefull Links</p>
        </div> */}
        <button className='image'>
          <img src={require("../images.jpg/HIGH-STANDARD-ENGLISH-COVER-jss-1-WKBK.jpg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/HIGH-STANDARD-ENGLISH-COVER-jss-1-WKBK.jpg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/UnderstandingEnglish.png")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/UnderstandingEnglishGrammar.webp")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/HIGH-STANDARD-ENGLISH-COVER-jss-1-WKBK.jpg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("../images.jpg/HIGH-STANDARD-ENGLISH-COVER-jss-1-WKBK.jpg")} alt="logo" />
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