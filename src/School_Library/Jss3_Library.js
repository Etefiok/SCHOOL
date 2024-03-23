import React from "react";
import { useState } from "react";
import "../session.css";




const Jss3_Library = () => {
    // const navigate = useNavigate();

    // function videoPlayer1() {
    //     navigate("/VideoPlayer1");
    // }


    return (
        <div>
            <div className="sessionbody">
                <div className="session-title">
                    <p>Subject</p>
                    <div className="sessionSub-title">
                        <h4>Book Title</h4>
                        <p>Author</p>
                    </div>
                </div>
                <div className="SubSection">
                    <div>
                        <p>Instructor's Name</p>
                        <p>Instructor</p>
                    </div>
    
                    
                    <div>
                        <button onClick={() => { window.location.href = "./VideoPlayer1";}}>Download</button>
                    </div>
                </div>
    
                <div className="empty"></div>
    
                <div className="session-title">
                    <p>Subject</p>
                    <div className="sessionSub-title">
                        <h4>Book Title</h4>
                        <p>Author</p>
                    </div>
                </div>
                <div className="SubSection">
                    <div>
                        <p>Instructor's Name</p>
                        <p>Instructor</p>
                    </div>
    
                    
                    <div>
                        <button onClick={() => { window.location.href = "./VideoPlayer1";}}>Download</button>
                    </div>
                </div>
    
                <div className="empty"></div>
    
                <div className="session-title">
                    <p>Subject</p>
                    <div className="sessionSub-title">
                        <h4>Book Title</h4>
                        <p>Author</p>
                    </div>
                </div>
                <div className="SubSection">
                    <div>
                        <p>Instructor's Name</p>
                        <p>Instructor</p>
                    </div>
    
                    
                    <div>
                        <button onClick={() => { window.location.href = "./VideoPlayer1";}}>Download</button>
                    </div>
                </div>
    
                <div className="empty"></div>
            </div>
        </div>
        );
    };

export default Jss3_Library;
