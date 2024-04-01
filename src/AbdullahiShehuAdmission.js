import React from "react"
import Ss1profileData from "./Ss1profileData";




const AbdullahiShehuAdmission = () => {
    const Students = Ss1profileData[5];


    return(
        <div>
           <h4> {Students.AdmissionStatus}</h4>
        </div>
    );
}

export default AbdullahiShehuAdmission