// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Loginforpage.css";
// import Navba from "./NavBar";
// import {
//   setUsername,
//   setPassword,
//   setIdnumber,
//   setLogin,
// } from "./Schoolproject/reducerSlice";
// import { useDispatch, useSelector } from "react-redux";
// import store from "./redux/store";

// function Loginforpage() {
//   const dispatch = useDispatch();

  // const { username, idnumber, password } = useSelector((store) => store.school);

  // const [formData, setFormData] = useState({
  //     username: '',
  //     password: '',
  //     idnumber: ''
  // });

  // const navigate = useNavigate();

  // function handleUsernameChange(e) {
  //   dispatch(setUsername(e.target.value));
  // }

  // function handlePasswordChange(e) {
  //   dispatch(setPassword(e.target.value));
  // }

  // const handleIdNumberChange = (e) => {
  //     const handleId = Number(e.target.value)
  //     dispatch(setIdnumber(handleId));
  //   };

  // function handleChange(e) {
  //     const { name, value } = e.target;
  //     setFormData({
  //         ...formData,
  //         [name]: value
  //     });
  // }

  // const loginUser = (e) => {
  //   e.preventDefault();
  //   dispatch(setLogin(username, password, idnumber));
  //   navigate("/home");
  //   console.log(username, password);
  // };

  // function signupuser() {
  //   navigate("/signup");
  // }

  // return (
  //   <div>
  //     <Navba />
  //     <div className="Logiback">
  //       <form onSubmit={loginUser} className="formcontain">
  //         <h2>Login</h2>
  //         <input
  //           className="blur"
  //           value={username}
  //           type="text"
  //           placeholder=" username"
  //           name="username"
  //           onChange={handleUsernameChange}
  //         />

          {/* <input className="blur" value={idnumber} type="text" placeholder="ID number" name="idnumber" onChange={handleIdnumberChange} /> */}

          {/* <input className="" value={idnumber} type="number" placeholder="ID number" name="idnumber" onChange={handleIdNumberChange} /> */}

//           <input
//             className="blur"
//             value={password}
//             type="password"
//             placeholder=" password"
//             name="password"
//             onChange={handlePasswordChange}
//           />

//           <div className="sign">
//             <button>Log In</button>
//             <br />
//             <a href="http://localhost:3000/forgetpassword">Forget password?</a>
//             <br></br>
//             <br></br>
//             click on the Sign Up Botton to Register<br></br>
//             <button onClick={signupuser}>Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Loginforpage;
