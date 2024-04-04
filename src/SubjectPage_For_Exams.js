import './SubjectPage.css';
import Navba from './NavBar';
import FullScreenButton from './FullScreenButton';
import NavBar_Student from './NavBar_Student';




function Subjects_For_Exams() {
    return(
        <div>
            <NavBar_Student />
                <div className='Subject_Contain'>
                    <div className="SubjectContainer">
                        <h1>CHOOSE SUBJECT</h1>
                            <div className="Subject">
                                <>
                                
                                    <button className='maths' onClick={() => { window.location.href = "./Exams";}}>Mathematics</button>
                                    <button className='english'onClick={() => { window.location.href = "./InstructionEnglishExams"}} >English</button>
                                    <button className='english'onClick={() => { window.location.href = "./InstructionLitInEnglishExams";}}>Lit in English</button>
                                    <button className='social'>Social Studies</button>
                                    <button className='Economics'>Economics</button>
                                    <button className='Computer'>Computer Studies</button>
                                    <button className='Basict'>Basic Tech</button>
                                    <button className='Agriculture'>Agriculture</button>
                                    <button className='Biology'>Biology</button>
                                    <button className='Yeruba'>Yeruba</button>
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