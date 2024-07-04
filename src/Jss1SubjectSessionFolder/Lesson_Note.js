import React, {useState, useEffect, useRef} from 'react'
import "./Lesson_Note.css"
import axios from 'axios'
import moment from "moment";

const Lesson_Note =({ show, onHide, content, updatedAt, title, video2 }) => {

    
  return (


    <div className='Lesson-Text'>
        <div className='Text-Border'>
        <h3>AREA FOR SHORT NOTE</h3>
        {content}
        <hr />
        <p>{moment(updatedAt).format("MMM, YY Y [at] h:mm A")}</p>
        </div>
    </div>
  )
}

export default Lesson_Note