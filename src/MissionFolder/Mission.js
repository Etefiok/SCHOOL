import React from "react";
import "./mission.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';



function Mission() {
    return(
        <div className='mission'>
            <div className="mission-statement">
                <h1><FontAwesomeIcon icon={faInfoCircle} /></h1>
                    <p>
                        <h2> ABOUT US</h2>[School Name] is a leading secondary school focused on academic excellence, character development, and community engagement.
                        
                         
                        
                    </p>
                        <button className=" Goodluckbutton" onClick={() => { window.location.href = "./About_Us_Page";}}>Read More</button>
            </div>

            <div className="mission-statement">
                <h1><FontAwesomeIcon icon={faInfoCircle} /></h1>
                    <p>
                        <h2> ABOUT US</h2>[School Name] is a leading secondary school focused on academic excellence, character development, and community engagement. 
                        
                    </p>
                        <button className=" Goodluckbutton">Read More</button>
            </div>

            <div className="mission-statement">
                <h1><FontAwesomeIcon icon={faInfoCircle} /></h1>
                    <p>
                        <h2> ABOUT US</h2>[School Name] is a leading secondary school focused on academic excellence, character development, and community engagement. 
                    </p>
                        <button className=" Goodluckbutton">Read More</button>
            </div>
        </div>
    )
}

export default Mission