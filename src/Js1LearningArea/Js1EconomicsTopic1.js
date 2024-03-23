import React from "react"
import Js1EconomicsData from "./Js1EconomicsData";
import "../AbdullahiShehuBiography.css"





const Js1EconsTopic1 = () => {
    const js1Econs = Js1EconomicsData[0];


    return(


<div className="page-cont">
        <div className="content-wrapper">

            <h4>{js1Econs.Topic1Title}</h4>
            <img src={require("../images.jpg/award1.jpeg" )}alt="" id="foodpic" />
            <p> {js1Econs.Topic1Body}</p>

            <img src={require("../images.jpg/award1.jpeg" )}alt="" id="foodpic" />
            <p> {js1Econs.Topic1Body}</p>

        </div>
    
        </div>
    );
}

export default Js1EconsTopic1