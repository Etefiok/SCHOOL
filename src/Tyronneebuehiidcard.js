import React from 'react';
import Ss1profileData from "./Ss1profileData";
// import './AbdullahiShehu.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Ss1profilemap.css'
import { useState } from 'react';
// import { CardTitle } from 'react-bootstrap';


const Tyronneebuehiidcard = () => {
  const firstPlayer = Ss1profileData[3];


  const [show, setShow] = useState(false)

  function toggleText(){
    setShow(!show)
  }


  return (
    
<div>

<div className='empty'></div> 

<Card className='cardstyle'>
         <Card.Body>
            
         {<Card.Title className='headtitlestyle' style={{ color: "white"}}>{firstPlayer.title}</Card.Title>}

                    
                    {<Card.Img style={{  borderRadius: "100px"}} src={firstPlayer.image} alt={firstPlayer.name} />}
                    
                    {<Card.Title className='cardtitlestyle'>{firstPlayer.name}</Card.Title>}
                        
                        
                    { show && <> <Card.Text>{firstPlayer.team}</Card.Text>
            <Card.Text>{firstPlayer.jerseyNumber}</Card.Text>
            <Card.Text>{firstPlayer.age}</Card.Text>
            {<button className='morebutton' onClick={() => { window.location.href = "./tyronneebuehi"; }}>More</button>}</> }<br /> <br/>

            {<Button variant="primary" onClick={toggleText}>{show ? 'Hide Details' : 'Show Details'}</Button>}
            

          </Card.Body>
        
        </Card>

        </div>

      )
    }

  

export default Tyronneebuehiidcard;

