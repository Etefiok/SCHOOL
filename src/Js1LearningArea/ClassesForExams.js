import Navba from '../NavBar';
import { useNavigate } from 'react-router-dom';
import NavBar_Student from '../NavBar_Student';
import './Classes.css';

// Tapping css from Classes.css


function ClassesForExams() {

//  const Navigate = useNavigate();

//     function Subjects(){
//         Navigate("./Subjects_For_Exams")
//     };


    return(
    <div className='choose'>
            <NavBar_Student />
        <div className='choose_class_container'>
            <div className='choose_class'>
                <p>
                    CHOOSE CLASS
                </p>
            </div>
            <div className='Classes'>
            <button onClick={() => { window.location.href = "./Subjects_For_Exams"; }}>JS1</button>
                <button>JS2</button>
                <button>JS3</button>
                <button>SS1</button>
                <button>SS2</button>
                <button>SS3</button>
            </div>
        </div>
    </div>
    )
    
}

export default ClassesForExams


