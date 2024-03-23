import React from 'react';
import Ss1profileData from "./Ss1profileData";
// import './AbdullahiShehu.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Ss1profilemap.css'
import { useState } from 'react';
// import { CardTitle } from 'react-bootstrap';


const LeonBalogunidcard = () => {
  const student = Ss1profileData[2];


  const [show, setShow] = useState(false)

  function toggleText(){
    setShow(!show)
  }


  return (
    
<div>

<div className='empty'></div> 

<Card className='cardstyle'>
         <Card.Body>
            
         {<Card.Title className='headtitlestyle' style={{ color: "white"}}>{student.title}</Card.Title>}

                    
                    {<Card.Img style={{  borderRadius: "100px"}} src={student.image} alt={student.name} />}
                    
                    {<Card.Title className='cardtitlestyle'>{student.name}</Card.Title>}
                        
                        
                    { show && <> <Card.Text>{student.team}</Card.Text>
            <Card.Text>{student.jerseyNumber}</Card.Text>
            <Card.Text>{student.age}</Card.Text>
            {<button className='morebutton' onClick={() => { window.location.href = "./abdullahishehu"; }}>More</button>}</> }<br /> <br/>

            {<Button variant="primary" onClick={toggleText}>{show ? 'Hide Details' : 'Show Details'}</Button>}
            

          </Card.Body>
        
        </Card>

        </div>

      )
    }

  

export default LeonBalogunidcard;










