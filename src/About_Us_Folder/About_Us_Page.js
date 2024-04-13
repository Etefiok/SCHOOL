import React from "react";
import NavBar_out from "../NavBar_out";
import "./About_Us_Page.css"
import { useState } from 'react';
import QRCode from 'qrcode.react';


const About_Us_Page = () => {
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
<div className="all-container">
    <div className="Qr_code">
      {inputValue && <QRCode className="Code" value={inputValue} />}
      </div>   
      <div className="Text_Input">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      </div> 
    </div>
  );
}
export default About_Us_Page