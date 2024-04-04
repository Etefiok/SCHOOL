import '../SubjectPage.css';
import NavBar_Student from '../NavBar_Student';




const Js1SubjectForLearning = () => {

//     const goFullScreen = () => {
//     const root = document.documentElement;
//     if (root.requestFullscreen) {
//       root.requestFullscreen();
//     } else if (root.webkitRequestFullscreen) {
//       root.webkitRequestFullscreen();
//     } else if (root.msRequestFullscreen) {
//       root.msRequestFullscreen();
//     }
//   };


    return(
        <div>
        <NavBar_Student />
        
        
<div className="Subject_Contain">
        <div className="SubjectContainer">
            <h1>CHOOSE SUBJECT</h1>

            
            <div className="Subject">
    <>
    <button className='maths' onClick={() => { window.location.href = "./Exams";}}>Mathematics</button>
    <button className='english' onClick={() => { window.location.href ="./LearnEnglish"}}>English</button>
    <button className='english'>Lit in English</button>
    <button className='social' onClick={() => { window.location.href = "./SocialStudies";}}>Social Studies</button> 
    <button className='Economics' onClick={() => { window.location.href = "./LearnEconomics";}} >Economics</button>
    <button className='Computer' onClick={() => { window.location.href = "./Exams";}}>Computer Studies</button>
    <button className='Basict'>Basic Tech</button>
    <button className='Agriculture'>Agriculture</button>
    <button className='Biology'>Biology</button>
    <button className='Yeruba'>Yeroba</button>
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

export default Js1SubjectForLearning