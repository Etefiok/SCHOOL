import React from "react"
import Ss1profileData from "./Ss1profileData";




const AbdullahiShehuTrophy = () => {
    const Students = Ss1profileData[5];


    return(
        <div>
           <h4> {Students.Trophy}</h4>
        </div>
    );
}

export default AbdullahiShehuTrophy