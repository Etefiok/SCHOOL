import React from "react"
import Ss1profileData from "./Ss1profileData";




const AbdullahiShehuResult = () => {
    const Students = Ss1profileData[5];


    return(
        <div>
           <h4> {Students.StudentResult}</h4>
        </div>
    );
}

export default AbdullahiShehuResult