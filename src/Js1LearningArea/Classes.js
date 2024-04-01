import './Classes.css';
import NavBar_Student from '../NavBar_Student';
import Navba from '../NavBar_out';
// import { useNavigate } from 'react-router-dom';




function Classes() {

//  const Navigate = useNavigate();

//     function Subjects(){
//         Navigate("./Subjects")
//     };


    return(
        <div>
            <NavBar_Student />
            
           
        <div className='ClassContainer'>
        <h1>CHOOSE CLASS</h1>
        <div className="Classesbutton">
<span>
<button onClick={() => { window.location.href = "./Js1SubjectForLearning"; }}>JS1</button>
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

export default Classes