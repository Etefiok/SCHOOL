import { useState, useRef } from "react";


function Studentsprofile() {
    const [name, setName] = useState ("Diligent Samuel")
    const nameRef=useRef();
    const [age, setAge]= useState("10")
    const [course, setCourse] = useState("Web Development")
    const [email, setemail] = useState("diligentsamuel@gmail.com");

    function increamentName() {
        setName(name + " etukudo");
    }

    // function increamentName() {
    //     setName( "Diligent Samuel");
    // }
    

    function decreamentName() {
        setName(name.replace(" etukudo", ""));
    }
    
    
    function save(){
        setName(nameRef.current.value );
    }

    function deleteName(){
        setName(name.replace(nameRef.current.value, "" ));
    }


    function increamentAge() {
        setAge(age +1);
    }
    function decreamentAge() {
        setAge(age -1);
    }

return(
    <div>
        <h1>STUDENT DETAILS</h1>
        <p>Name: {name}</p> <button onClick={increamentName}>Update Name</button>
                            <button onClick={decreamentName}>Back</button>
                            <input type="text" ref={nameRef}></input>
                            <button onClick={save}>Save</button>
                            <button onClick={deleteName}>Delete</button>
                            <button onClick={increamentName}>Original</button>
        <p>Age: {age}</p> <button onClick={increamentAge}>+</button><button onClick={decreamentAge}>-</button>
        <p>Course: {course}</p>
        <p>Email: {email}</p>

       
       

    </div>
)
}
export default Studentsprofile