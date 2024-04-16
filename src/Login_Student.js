import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loginforpage.css';
import NavBar_Student from "./NavBar_out";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login_Student() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [idnumber, setIdnumber] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate ();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/login', {username, idnumber, password})
        .then(result => {
            console.log({result});
            navigate("");
          })
          .catch(err => console.log(err));

    }


    return (
        <div>
            
            <NavBar_Student />
            <div className='Logiback'>
                <form onSubmit={handleSubmit} 
                    className="formcontain">
                    <h2>Login</h2>
                    <label className="label">Username
                        <input className="blur" 
                        value={username} 
                        type="text" 
                        placeholder=" Username" 
                        name="username" 
                        onChange={(e)=> setUsername(e.target.value)} />
                    </label>

                    <label className="label">ID number
                        <input className="blur" 
                        value={idnumber} 
                        type="number" 
                        placeholder=" ID number" 
                        name="idnumber" 
                        onChange={(e)=> setIdnumber(e.target.value)} />
                    </label>

                    <label className="label">Password
                        <div className="password-input">
                            <input
                                className="blur_password"
                                value={password}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                onChange={(e)=> setPassword(e.target.value)} />
                            
                            <span
                                type="button"
                                className="toggle-password-button"
                                onClick={() => setShowPassword(prevShowPassword => !prevShowPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye /> }
                            </span>
                        </div>
                    </label>

                    <div className='sign'>
                        <button 
                            className="border1" 
                            type="submit"
                            >Login
                        </button>

                        <button 
                            className="border2"
                            type="button" 
                            onClick={() => { window.location.href = "./forgetpassword"; }}>
                            <span>Forget password?</span>
                        </button>
                       
                    </div>

                    <div className="forgetpassword">
                    Don't have an account? 
                    <button type="button" onClick={() => { window.location.href = "./Signup" }}>Signup</button>
                        
                       
                    </div>
                        
                   
                </form>
            </div>
        </div>
    );
}

export default Login_Student;
