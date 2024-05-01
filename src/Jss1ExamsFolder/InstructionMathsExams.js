import React from "react";
import './Exams.css';
import NavBar_Student from "../NavBar_Student";

const InstructionMathsExams = () =>{
    return (
    <div>
        <NavBar_Student />
            <div className='Examsback' style={{ textAlign: "center" }}>
                <div className="Instruction">
                            <h3>Instructions:</h3>
                            <ol>
                                <li>Read each question carefully before selecting or writing your answer.</li>
                                <li>Write NULL at any question you cant attemp in order to pass to the next question.</li>
                                <li>For Objective questions:</li>                    
                                    <ul>   
                                        <li>Each question carries 10 marks</li>                 
                                        <li>Select the radio button next to your chosen answer.</li>
                                        <li>Only one answer is correct for each question.</li>
                                    </ul>
                                <li>For theory questions:</li>
                                    <ul>    
                                        <li>Each question carries 20 marks</li>                
                                        <li>Write your answer in the provided text area.</li>
                                        <li>Explain the concept as clearly and concisely as possible.</li>
                                    </ul>
                                <li>You have a limited time to complete the exam.</li>
                                <li>Click the "Submit" button after selecting your answer for each question.</li> 
                                <li>Ensure you have answered all questions before submitting.</li> 
                                <li> Your total score will be displayed at the end of the exam.</li>        
                            </ol>
                            {/* <h3>TOPIC: DETERMINERS</h3>
        <p>DIRECTION: Choose the correct answer from the lettered options.</p>
        <h4>Fill in the blank space with the most appropriate option</h4> */}
                    <div className="GoodLuckButton">
                        <button onClick={() => { window.location.href = "./Mathematics";}}>start</button>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default InstructionMathsExams