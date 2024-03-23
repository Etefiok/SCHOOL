import React from "react"
import Ss1profileData from "./Ss1profileData";




const AbdullahiShehuStudentStatus = () => {
    const Students = Ss1profileData[5];


    return(
        <div>
           <h4> {Students.StudentStatus}</h4>
        </div>
    );
}

export default AbdullahiShehuStudentStatus