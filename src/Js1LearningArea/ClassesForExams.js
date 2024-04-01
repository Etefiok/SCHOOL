import Navba from '../NavBar';
import { useNavigate } from 'react-router-dom';
import NavBar_Student from '../NavBar_Student';
import './Classes.css';

// Tapping css from Classes.css


function ClassesForExams() {

 const Navigate = useNavigate();

    function Subjects(){
        Navigate("./Subjects_For_Exams")
    };


    return(
    <div>
            <NavBar_Student />
            
           
        <div className='ClassContainer'>
        <h1>CHOOSE CLASS</h1>
        
            <div className="Classesbutton">
                <span>
                <button onClick={() => { window.location.href = "./Subjects_For_Exams"; }}>JS1</button>
                <button>JS2</button>
                <button>JS3</button>
                <button>SS1</button>
                <button>SS2</button>
                <button>SS3</button>
                </span>
            </div>
        </div>
    </div>
    )
    
}

export default ClassesForExams