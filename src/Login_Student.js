import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Loginforpage.css';
import NavBar_Student from "./NavBar_out";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FaEye, FaEyeSlash, FaTimes, FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login_Student() {
    
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [idnumber, setIdnumber] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // fetch("http://localhost:5000/user/"+username).then((res)=>{
            //     return res.json();
            // }).then((resp)=>{
            //     console.log(resp);
            //     if (Object.keys(resp).length===0){
            //         setAlertMessage(<span className="Login-Error-Message"><FaTimes /> &nbsp; &nbsp;Please enter valid username</span>);
            //     } else {
            //         if (resp.password===password){
            //             setAlertMessage(<span className="Login-successfull"><FaCheck /> &nbsp; &nbsp;Login successfull</span>);
            //             navigate("./");
            //         }else{
            //         setAlertMessage(<span className="Login-Error-Message"><FaTimes /> &nbsp; &nbsp;Please enter valid credentials</span>);

            //         }
            //     }
            // }).catch(err => {
            //     console.log(err);
            //     setAlertMessage(<span className="Login-Error-Message"><FaTimes /> &nbsp; &nbsp;An error occurred while processing your request</span>);
                
            // });
            axios.post('http://localhost:5000/login', { username, idnumber, password })
                .then(result => {
                    console.log({ result });
                    if (result.data === 'Login successfully') {
                        setAlertMessage(<span className="Login-successfull"><FaCheck /> &nbsp; &nbsp; Login successful</span>);
                        // navigate("./Homepage_Student");
                    } else {
                        setAlertMessage(<span className="Login-Error-Message"><FaTimes /> &nbsp; &nbsp; Invalid Credentials</span>);
                    }
                })
                .catch(err => {
                    console.log(err);
                    setAlertMessage(<span className="Login-Error-Message"><FaTimes /> &nbsp; &nbsp;An error occurred while processing your request</span>);
                    
                });
        }
    }

    const validate=() =>{
        let result = true;
        if (username === '' || username === null) {
            result = false;
            setAlertMessage(<span className="Login-Error-Message"><FaTimes /> &nbsp; &nbsp; Please enter a valid username</span>);
            
        }

        if (idnumber === '' || idnumber === null) {
            result = false;
            setAlertMessage(<span className="Login-Error-Message"><FaTimes /> &nbsp; &nbsp; Please enter a valid ID number</span>);
            
        }

        if (password === '' || password === null) {
            result = false;
            setAlertMessage(<span className="Login-Error-Message"><FaTimes /> &nbsp; &nbsp; Please enter a valid password</span>);

        }
        return result;
    }

    return (
        <div>
            <NavBar_Student />
            <div className='Logiback'>
                <form onSubmit={handleSubmit} className="formcontain">
                    <h2>Login</h2>
                    <div className="alert-message">{alertMessage}</div>
                    <label className="label">Username
                        <input className="blur" value={username} type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label className="label">ID number
                        <input className="blur" value={idnumber} type="number" placeholder="ID number" name="idnumber" onChange={(e) => setIdnumber(e.target.value)} />
                    </label>
                    <label className="label">Password
                        <div className="password-input">
                            <input
                                className="blur_password"
                                value={password}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)} />
                            <span
                                type="button"
                                className="toggle-password-button"
                                onClick={() => setShowPassword(prevShowPassword => !prevShowPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </label>
                    <div className='sign'>
                        <button className="border1" type="submit">Login</button>
                        <button className="border2" type="button" onClick={() => { window.location.href = "./forgetpassword"; }}>
                            <span>Forgot password?</span>
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
