import React, {useState, useEffect} from 'react';
import './SubjectPage.css';
import Navba from './NavBar';
import FullScreenButton from './FullScreenButton';
import NavBar_Student from './NavBar_Student';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import axios from 'axios';




function Subjects_For_Exams() {
    const navigate = useNavigate();

    useEffect(() => {
        const verifyUser = async () => { 
          try {
            // const token = localStorage.getItem('token');
            const token = Cookies.get('token'); 
            console.log({token})
            if (token) {
              navigate('/Subjects_For_Exams');
              return;
            }
            const response = await axios.get('http://localhost:5000/auth/verify?page=Subjects_For_Exams', {
              headers: {
                Authorization: `Bearer ${token}` 
              }
            });
            console.log('Verify response:', response.data);
            if (response.data.status === true) {
              navigate('/Subjects_For_Exams');
    
            } else {
              navigate('/Login_Student');
            }
          } catch (error) {
            console.error('Error verifying user:', error);
            if (error.response) {
              console.error('Server response:', error.response.data);
            }
     
            navigate('/Login_Student');
          }
        };
    
        verifyUser();
      }, [navigate]);


    return(
        <div>
            <NavBar_Student />
                <div className='Subject_Contain'>
                    <div className="SubjectContainer">
                        <h1>CHOOSE SUBJECT</h1>
                            <div className="Subject">
                                <>
                                
                                    <button className='maths' onClick={() => { window.location.href = "./InstructionMathExams";}}>Mathematics</button>
                                    <button className='english'onClick={() => { window.location.href = "./InstructionEnglishExams"}} >English</button>
                                    <button className='english'onClick={() => { window.location.href = "./InstructionLitInEnglishExams";}}>Lit in English</button>
                                    <button className='social'>Social Studies</button>
                                    <button className='Economics'>Economics</button>
                                    <button className='Computer'>Computer Studies</button>
                                    <button className='Basict'>Basic Tech</button>
                                    <button className='Agriculture'>Agriculture</button>
                                    <button className='Biology'>Biology</button>
                                    <button className='Yoruba'>Yeruba</button>
                                    <button className='Chemistry'>Chemistry</button>
                                    <button className='CRK'>CRK</button>
                                    <button className='Government'>Government</button>
                                    <button className='Physics'>Physics</button>
                                    <button className='Science'>Science</button>
                                    <button className='Technical'>Technical Drawing</button>
                                    <button className='AutoMech'>Auto Mech</button>
                                    
                                </>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Subjects_For_Exams