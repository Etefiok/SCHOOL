import React from "react"
import Ss1profileData from "./Ss1profileData";




const AbdullahiShehuBiography = () => {
    const Students = Ss1profileData[5];


    return(
        <div>
           <h4> {Students.StudentBiography}</h4>
        </div>
    );
}

export default AbdullahiShehuBiography