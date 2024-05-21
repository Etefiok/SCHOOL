// // import { useState, useEffect } from "react";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Loginforpage.css';
// import Navba from "./NavBar";

// function Login2() {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         idnumber: ''
//     });



//     const navigate = useNavigate();

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     }
    
// function loginUser(e) {
//     e.preventDefault();
//     setFormData({
//         username: '',
//         idnumber:'',
//         password: '',
//     });

//     navigate("/ss1profilemap");
    
// }


    
    // function loginUser(e) {
    //     e.preventDefault();
    //     if(formData.username === 'samuel' &&
    //        formData.idnumber === '3454' && 
    //        formData.password === 'Onelove@2??'        
    //     )
    //     {
    //     navigate("/Abdullahishehu");
    //     console.log( formData.username, formData.password, formData.idnumber)
    //     }
    //     else{
    //         alert("Invalid username, ID number, or password. Please try again.")
    //     }
    // }



    // function signupuser() {
    //     navigate ('/signup');
    // }

    // const Navigate = useNavigate();
    

//     return (
//         <div>
//             <Navba />
//             <div className='Logiback'>
//             <form onSubmit={loginUser}  className="formcontain">
            
//             <h2>Enter your details to Login</h2>
//             <input className="blur" value={formData.username} type="text" placeholder=" Username" name="username" onChange={handleChange} /> 
//             <input className="blur" value={formData.idnumber} type="number" placeholder=" ID number" name="idnumber" onChange={handleChange} />
//             <input className="blur" value={formData.password} type="password" placeholder=" Password" name="password" onChange={handleChange} />
           

            
//             <div className='sign'>
//             <button >Log In</button><br />

            
//                 <a href="http://localhost:3000/forgetpassword">Forget password?</a>
//         <br></br><br></br>
//         click on the Sign Up Botton to Register<br></br>
//         <button onClick={signupuser}>Sign Up</button>
//         </div>
//             </form>
//             </div>
//         </div>
//     );
// }

// export default Login2