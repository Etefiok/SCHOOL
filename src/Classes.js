import './Classes.css';
import Navba from './NavBar';
import { useNavigate } from 'react-router-dom';
import NavBar_Student from './NavBar_Student';




function Class() {

 const Navigate = useNavigate();

    function Subjects(){
        Navigate("./Subjects")
    };


    return(
        <div>
            <NavBar_Student />
            
           
        <div className='ClassContainer'>
        <h1>CHOOSE CLASS</h1>
        <div className="Classesbutton">
<h4>
<button onClick={() => { window.location.href = "./Subjects"; }}>JS1</button>
<button>JS2</button>
<button>JS3</button>
<button>SS1</button>
<button>SS2</button>
<button>SS3</button>
</h4>

</div>
        </div>
        </div>
    )
    
}

export default Class