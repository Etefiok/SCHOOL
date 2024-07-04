import Navba from '../NavBar';
import { useNavigate } from 'react-router-dom';
import NavBar_Student from '../NavBar_Student';
import './Classes.css';
 import React, { useEffect } from 'react';
 import { verifyUser } from '../redux/Actions';
 import { useDispatch, useSelector } from 'react-redux';

// Tapping css from Classes.css


function ClassesForExams() {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/Login_Student'); // Redirect to login if not logged in
      }
    }, [isLoggedIn, navigate]);


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
                                <button onClick={() => { window.location.href = "./Subjects_For_Exams"; }}>JS1</button>
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

export default ClassesForExams




// const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
