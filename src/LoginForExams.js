import { Form } from 'react-router-dom';
import './LoginForExams.css';
import { useNavigate } from 'react-router-dom';
import Navba from './NavBar';
import ForgetPassword from './ForgetPassword';





function LoginForExams() {


    const Navigate = useNavigate();
    
function loginuser(){
    Navigate("/Class")
}

function signupuser(){
    Navigate("/SignUp")
}

// function forgetPassword(){
//     Navigate("/ForgetPassword")
// }


    return(
        <div>
        <Navba />
        <div className='Loginback'>
<form className="Login">

    <h4>Enter your details to Login</h4>
        <input type="text" placeholder="ID number"/>
        <input type="password" placeholder="Password" pattern="[a-zA-Z0-9!@#$%^&*()_+=\-[\]{}|\\;:'\" />
        <div className='signup'>
        <button  onClick={loginuser}>Login</button><br></br>


        <div >
            <a  href="http://localhost:3000/forgetpassword">Forget Password?</a>
    
        </div>


        <div className='signup'>
        </div><br></br><br></br>
        click on the Sign Up Botton to Register<br></br>
        <button onClick={signupuser}>Sign Up</button>
        
        </div>
        </form>
        </div>
        </div>

    )
}

export default LoginForExams