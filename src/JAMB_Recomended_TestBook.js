import React from "react";
import './ImageSlideFolder/ImageSlide.css';



function JAMB_Recomended_TextBook() {
    return(
        
<div className="over_container2">
<p className="Usefull">JAMB Recomended TextBook</p>
      <div className='image-container'>
        {/* <div>
        <p>Usefull Links</p>
        </div> */}
        <button className='image'>
          <img src={require("./images.jpg/HIGH-STANDARD-ENGLISH-COVER-jss-1-WKBK.jpg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("./images.jpg/HIGH-STANDARD-ENGLISH-COVER-jss-1-WKBK.jpg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("./images.jpg/UnderstandingEnglish.png")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("./images.jpg/UnderstandingEnglishGrammar.webp")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("./images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("./images.jpg/HIGH-STANDARD-ENGLISH-COVER-jss-1-WKBK.jpg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("./images.jpg/HIGH-STANDARD-ENGLISH-COVER-jss-1-WKBK.jpg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("./images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("./images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        <button className='image'>
          <img src={require("./images.jpg/award1.jpeg")} alt="logo" />
          <p>the winning team</p>
        </button>

        
      </div>
</div>

    )
}

export default JAMB_Recomended_TextBook