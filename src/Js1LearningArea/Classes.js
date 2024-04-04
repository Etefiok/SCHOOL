import './Classes.css';
import NavBar_Student from '../NavBar_Student';
import Navba from '../NavBar_out';
// import { useNavigate } from 'react-router-dom';




function Classes() {


    return(
        <div>
            <NavBar_Student />
                <div className='Space'></div>
                <div className='choose'>
                    <div className='choose_class_container'>
                        <div className='choose_class'>
                            <p>
                                CHOOSE CLASS
                            </p>
                        </div>
                            <div className='Classes'>
                                <button onClick={() => { window.location.href = "./Js1SubjectForLearning"; }}>JS1</button>
                                <button>JS2</button>
                                <button>JS3</button>
                                <button>SS1</button>
                                <button>SS2</button>
                                <button>SS3</button>
                            </div>
                    </div>
                </div>
        </div>
        )
        
    }
    

export default Classes
