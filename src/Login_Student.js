// import { useState, useEffect } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loginforpage.css';
import NavBar_Student from "./NavBar_out";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Login_Student() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        idnumber: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function loginUser(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/Login', {
                username: formData.username,
                idnumber: formData.idnumber,
                password: formData.password
            });
            // If login is successful, redirect to the homepage
            navigate("/Homepage_Student");
        } catch (error) {
            // If login fails, display an error message
            alert("Invalid username, ID number, or password. Please try again.");
        }
    }

    function signupuser() {
        navigate('/Signup');
    }

    return (
        <div>
            {error && <div>{error}</div>}
            <NavBar_Student />
            <div className='Logiback'>
                <form onSubmit={loginUser} className="formcontain">
                    <h2>Login</h2>
                    <label className="label">Username
                        <input className="blur" value={formData.username} type="text" placeholder=" Username" name="username" onChange={handleChange} />
                    </label>
                    <label className="label">ID number
                        <input className="blur" value={formData.idnumber} type="number" placeholder=" ID number" name="idnumber" onChange={handleChange} />
                    </label>

                    <label className="label">Password
                        <div className="password-input">
                            <input
                                className="blur_password"
                                value={formData.password}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="toggle-password-button"
                                onClick={() => setShowPassword(prevShowPassword => !prevShowPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
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
