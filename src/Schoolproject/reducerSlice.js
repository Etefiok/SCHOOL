// const initialState = {
//     username: '',
//     password: '',
//     idnumber: 0
// }

// export default function school (state = initialState, action){
//     switch (action.type) {
//         case "setusername":
//             return {
//                 ...state,
//                 username: action.payload
//             }
//         case "setpassword":
//             return {
//                 ...state,
//                 password: action.payload
//             }             
//         case "idnumber":
//             return{
//                 ...state, 
//                 idnumber: action.payload
//             }
//         case "setlogin": 
//             return{
//                 ...state,
//                 username: action.payload.username,
//                 password: action.payload.password,
//                 // idnumber: action.payload.idnumber
//             }    
//         default:
//            return(
//             state
//            )
//     }
// }

// export function setUsername(username){
//     return{
//         type: "setusername", 
//         payload: username
//     }

// }

// export function setPassword(password){
//     return{
//         type: "setpassword",
//         payload: password 
//     }
// }

// export function setIdnumber(idnumber){
//     return{
//         type: "setidnumber",
//         payload: idnumber
//     }
// }

// export function setLogin(username, password, ){
//     return{
//         type: "setlogin",
//         payload: {
//             username, 
//             password,
//             // idnumber
//         }
//     }
// }