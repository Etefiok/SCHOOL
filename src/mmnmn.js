import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loginforpage.css';
import Navba from "./NavBar";

function Loginforpage() {
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

    function loginUser(e) {
        e.preventDefault();
        setFormData({
            username: '',
            password: '',
            idnumber: ''
        });
        navigate("/home");
    }

    function signupuser() {
        navigate('/signup');
    }

    return (
        <div>
            <Navba />
            <div className='Loginback'>
                <form onSubmit={loginUser} className="Login">
                    <h2>Enter your details to Login</h2>
                    <input value={formData.username} type="text" placeholder="Enter username" name="username" onChange={handleChange} />
                    <br/><br/>
                    <input value={formData.idnumber} type="password" placeholder="Enter ID number" name="idnumber" onChange={handleChange} />
                    <br/><br/>
                    <input value={formData.password} type="password" placeholder="Enter password" name="password" onChange={handleChange} />
                    <br/>
                    <button>Log In</button>
                    <div className='signup'>
                        <br/><br/>
                        Click on the Sign Up Button to Register<br/>
                        <button onClick={signupuser}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Loginforpage;
