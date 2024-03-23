import React, {useState} from "react";
import Ss1profileData from "./Ss1profileData";
import Empty from "./empty";
import './AbdullahiShehuResultStatus.css';
import { Navigate, useNavigate } from "react-router-dom";



const AbdullahiShehuResultStatus = ({score}) => {
  const [passportImage, setPassportImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  console.log ("Result line 56", score)
    const handlePrint = () => {
      const printContents = document.querySelector('.printable-area').outerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    };

    const Students = Ss1profileData[0];
    const economicResult = localStorage.getItem("Score")

  return (

<div className="AbdulResultCheck">
    <div className="session-tit">
        <p>Class</p>
        <p>Session</p>
        <p>Test</p>
        <p>Exams</p>
        <p>Total Score</p>
        <p>Remark</p>
    </div>

    <div className="SubSect">
        <p>JSS1</p>
        <p>Third Term</p>
        <p>{economicResult}%</p>
        {/* <p>{Students.ResultThirdTerm1.Exams}</p> */}
        {/* <p>{Students.ResultThirdTerm1.TotalScore}</p> */}
        <div className="Details-Button">
            {/* <p>{Students.ResultThirdTerm1.Remark}</p> */}
            <button onClick={() => { window.location.href = "./AbdullahiShehuJss1ThirdTermResult"}}>Details</button>
        </div>
    </div>

    <div className="empty"></div>

    <div className="SubSect">
        <p>JSS1</p>
        <p>Second Term</p>
        {/* <p>{Students.ResultSecondTerm1.Test}</p>
        <p>{Students.ResultSecondTerm1.Exams}</p>
        <p>{Students.ResultSecondTerm1.TotalScore}</p> */}
        <div className="Details-Button">
            {/* <p>{Students.ResultSecondTerm1.Remark}</p> */}
            <button onClick={() => { window.location.href = "./AbdullahiShehuJss1SecondTermResult"}}>Details</button>
        </div>                                                 
    </div>

    <div className="empty"></div>

    <div className="SubSect">
        <p>JSS1</p>
        <p>First Term</p>
        {/* <p>{Students.ResultFirstTerm1.Test}</p>
        <p>{Students.ResultFirstTerm1.Exams}</p>
        <p>{Students.ResultFirstTerm1.TotalScore}</p> */}
        <div className="Details-Button">
            {/* <p>{Students.ResultFirstTerm1.Remark}</p> */}
            <button onClick={() => { window.location.href = "./AbdullahiShehuJss1FirstTermResult"}}>Details</button>
        </div>
    </div>
</div>
  );
};

export default AbdullahiShehuResultStatus
