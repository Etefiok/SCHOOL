import React from "react";
import { useState } from "react";
import "../session.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';





const Jss1_Science_Sessions = () => {
    // const navigate = useNavigate();

    // function videoPlayer1() {
    //     navigate("/VideoPlayer1");
    // }


    return (
        <div className="sessionbody">
            <div className="title">
                <p>Science</p>
            </div>
        <div className="session-title">
                            <h6><DescriptionIcon />Your Session Title Here</h6>
                            <p>Session SubTitle Here</p>
                    </div>
                    <div className="SubSection">
                        <div className="icon">
                            <PersonIcon />
                            <p>Instructor's Name</p><br className="break-gap" />
                            <p>Instructor</p>
                        </div>
        
                        <div className="icon">                    
                            <EventIcon />                       
                             <p>Date</p><br className="break-gap" />
                            <p>Instructor</p>
                        </div>
        
                        <div className="icon">                    
                            <AccessTimeIcon />                    
                            <p> Duration</p><br className="break-gap"/>
                            <p>Instructor</p>
                        </div>
        
                        <div>
                            <VideoLibraryIcon />
                            <button onClick={() => { window.location.href = "./VideoPlayer1";}}>Watch Session</button>
                        </div>
                    </div>
        
                    <div className="empty"></div>
        
                    <div className="session-title">
                            <h6><DescriptionIcon />Your Session Title Here</h6>
                            <p>Session SubTitle Here</p>
                        
                    </div>
                    <div className="SubSection">
                        <div className="icon">
                            <PersonIcon />
                            <p>Instructor's Name</p><br className="break-gap" />
                            <p>Instructor</p>
                        </div>
        
                        <div className="icon">                    
                            <EventIcon />                       
                             <p>Date</p><br className="break-gap" />
                            <p>Instructor</p>
                        </div>
        
                        <div className="icon">                    
                            <AccessTimeIcon />                    
                            <p> Duration</p><br className="break-gap"/>
                            <p>Instructor</p>
                        </div>
        
                        <div>
                            <VideoLibraryIcon />
                            <button onClick={() => { window.location.href = "./VideoPlayer1";}}>Watch Session</button>
                        </div>
                    </div>
        
        
                    <div className="empty"></div>
        
                    <div className="session-title">
                            <h6><DescriptionIcon />Your Session Title Here</h6>
                            <p>Session SubTitle Here</p>
                    </div>
                    <div className="SubSection">
                        <div className="icon">
                            <PersonIcon />
                            <p>Instructor's Name</p><br className="break-gap" />
                            <p>Instructor</p>
                        </div>
        
                        <div className="icon">                    
                            <EventIcon />                       
                             <p>Date</p><br className="break-gap" />
                            <p>Instructor</p>
                        </div>
        
                        <div className="icon">                    
                            <AccessTimeIcon />                    
                            <p> Duration</p><br className="break-gap"/>
                            <p>Instructor</p>
                        </div>
        
                        <div>
                            <VideoLibraryIcon />
                            <button onClick={() => { window.location.href = "./VideoPlayer1";}}>Watch Session</button>
                        </div>
                    </div>
        
                    <div className="empty"></div>
        
                </div>
    );
};

export default Jss1_Science_Sessions;
