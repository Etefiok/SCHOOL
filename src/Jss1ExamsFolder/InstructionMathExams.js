import React from "react";
import './Exams.css';

const InstructionMathExams = () =>{

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
                <button onClick={() => { window.location.href = "./Mathematics";}}>start</button>
            </div>
        </div>
    );
}

export default InstructionMathExams