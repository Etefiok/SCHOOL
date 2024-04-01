import React from "react";
import './Exams.css';

const InstructionSocialStudyExams = () =>{
    return (
    <div className='Examsback' style={{ textAlign: "center" }}>
        <div className="Exams">
                    <h3>Instructions:</h3>
                    <p>1. Read each question carefully before selecting your answer.</p>
                    <p>2. You must select one answer for each question.</p>
                    <p>3. Once you submit an answer, you cannot change it.</p>
                    <p>4. You will receive 10 points for each correct answer.</p>
                    <p>5. You have a limited time to complete the exam.</p>
                    <p>6. Click the "Submit" button after selecting your answer for each question.</p><br></br>
                    {/* <h3>TOPIC: DETERMINERS</h3>
<p>DIRECTION: Choose the correct answer from the lettered options.</p>
<h4>Fill in the blank space with the most appropriate option</h4> */}
            <button onClick={() => { window.location.href = "./SocialStudies";}}>start</button>
        </div>
    </div>
    )
}

export default InstructionSocialStudyExams