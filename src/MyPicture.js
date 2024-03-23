import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MyPicture = () => {
  const [fullName, setFullName] = useState("diligent samuel");
  const [bio, setBio] = useState("this is my first state in react");
  const [imgSrc, setImgSrc] = useState("https://www.mykhel.com/thumb/190x90x190/football/players/3/186703.1528888991.jpg");
  const [profession, setProfession] = useState("web Developer");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const addDetails = () => {
    navigate("/adddetails");
  };

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={addDetails}>Add Details</button>
      <div style={{ textAlign: 'center' }}>
        <h2>My name is {fullName}</h2>
        <p>{bio}</p>
        {show && (
          <div>
            <h4 style={{ marginRight: "20px" }}>I am a {profession}</h4>
            <img src={imgSrc} alt="Profile" /><br/>
            {fullName}<br />
            {bio}<br />
            {profession}
          </div>
        )}
        <button onClick={toggleShow}>
          {show ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </div>
  );
};

export default MyPicture;
