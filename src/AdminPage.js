import React from "react";
import './AdminPage.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Adminpage = () => {
    // const student = Ss1profileData[2];
  
  
    const [show, setShow] = useState(false)
  
    function toggleText(){
      setShow(!show)
    }
  
    return(

<div>

<div className='cardba'> 

<Card className='cardstle'>
         <Card.Body>
            
         {<Card.Title className='headtitlestyle' style={{ color: "white"}}>my name</Card.Title>}
                    {<Card.Img style={{  borderRadius: "100px"}} src='' />}
                    {<Card.Title className='cardtitlestyle'>my name</Card.Title>}
                    { show && <> <Card.Text>Team</Card.Text>
            <Card.Text>card number</Card.Text>
            <Card.Text>age</Card.Text>
            {<button className='morebutton' onClick={() => { window.location.href = "./abdullahishehu"; }}>More</button>}</> }<br /> <br/>
            {<Button variant="primary" onClick={toggleText}>{show ? 'Hide Details' : 'Show Details'}</Button>}
            

          </Card.Body>
        
        </Card>
        </div>
adfka;dlg'a;d'
        </div>

      )
    }

export default Adminpage





{/* <div>

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
    } */}
