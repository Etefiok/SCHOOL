// import { useState, useEffect } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loginforpage.css';
import NavBar_Student from "./NavBar_out";
import "bootstrap/dist/css/bootstrap.min.css";

function Login_Student() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        idnumber: ''
    });



    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    
// function loginUser(e) {
//     e.preventDefault();
//     setFormData({
//         username: '',
//         idnumber:'',
//         password: '',
//     });

//     navigate("/ss1profilemap");
    
// }


    
    function loginUser(e) {
        e.preventDefault();
        if(formData.username === 'samuel' &&
           formData.idnumber === '3454' && 
           formData.password === 'Onelove@2??'        
        )
        {
        navigate("/Homepage_Student");
        console.log( formData.username, formData.password, formData.idnumber)
        }
        else{
            alert("Invalid username, ID number, or password. Please try again.")
        }
    }



    function signupuser() {
        navigate ('/Signup');
    }

    // const Navigate = useNavigate();
    

    return (
        <div>
            <NavBar_Student />
            <div className='Logiback'>
            <form onSubmit={loginUser}  className="formcontain">
            
            <h2>Login</h2>
            <label className="label">Username
            <input className="blur" value={formData.username} type="text" placeholder=" Username" name="username" onChange={handleChange} /> 
            </label>

            <label className="label">ID number
            <input className="blur" value={formData.idnumber} type="number" placeholder=" ID number" name="idnumber" onChange={handleChange} />
            </label>

            <label className="label">Password
            <input className="blur" value={formData.password} type="password" placeholder=" Password" name="password" onChange={handleChange} />
            </label>

            
            <div className='sign'>
            <button onClick={() => { window.location.href = "./HomePage_Student";}}>Login</button><br />

            
                <button onClick={() => { window.location.href = "./forgetpassword";}}>Forget password?</button>
        <br></br>
        Don't have an account? <br></br><button onClick={()=> {window.location.href ="./Signup"}}>Signup</button>
        </div>
            </form>
            </div>
        </div>
    );
}

export default Login_Student