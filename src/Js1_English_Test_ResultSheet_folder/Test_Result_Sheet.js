import React, {useState, useEffect} from "react";
import '../AbdullahiShehuResultStatus.css';
// import "./AbdullahiShehu.css";
import { Navigate, useNavigate } from "react-router-dom";
import Ss1profileData from "../Ss1profileData";
import { useLocation } from 'react-router-dom';



const handlePrint = () => {
    const printContents = document.querySelector('.printable-area').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  
const Table = ({ data1, data2, data3, data4, data5 }) => {
    const Students = Ss1profileData[0];
    
    return (
<div className="printable-area">
        <div className="ResultBod">
            
        <div>
            <div className="FormContain">
                <div className="FormLogo">
                    <img src={require("../images.jpg/schoollogo.jpeg")}alt="logo" />
                </div>

                    <div>
                        <div className="SchoolLogo">
                            <p>SAMPLE SECONDARY SCHOOL</p>
                        </div> 
                            <div className="RegistrationNum">
                                    Registration Number

                                <div className="tab">                                
                                    <table >
                                        <tr>
                                        <td>{Students.RegistrationNumber.Serial1}</td>
                                        <td>{Students.RegistrationNumber.Serial2}</td>
                                        <td>{Students.RegistrationNumber.Serial3}</td>
                                        <td>{Students.RegistrationNumber.Serial4}</td>
                                        <td>{Students.RegistrationNumber.Serial5}</td>
                                        <td>{Students.RegistrationNumber.Serial6}</td>
                                        <td>{Students.RegistrationNumber.Serial7}</td>
                                        </tr>
                                    </table>
                                    
                                </div>
                                (for official use only)
                            </div>
                    </div>        
            
                                <div className="passport">
                                        {/* {passportImage &&   */}
                                        <img src={Students.image} alt="Passport Preview"  style={{ maxWidth: '100%', maxHeight: '100%' }}  />
                                        {/* <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handlePassportUpload} required
                                        /> */}
                                </div>
            </div>
        </div>

            <div className="ResultStyle">
                
                <p>{Students.name}</p>         
                {/* <p>{Students.PaymentStatus}</p> */}
                 <p>JSS1</p>
                <p>Third Term Result</p>
            </div>


    <div className="table-container">
        <table className='table'>
        <tr>
            <th colSpan="1">SUBJECTS</th>
            <th colSpan="6">TEST RESULT SHEET</th>
        </tr>

            <tr>
                <div className="table-merge" >SUBJECTS</div>
                <th>TEST 1</th>
                <th>TEST 2</th>
                <th>TEST 3</th>
                <th>One-To-One</th>
                <th>Total Score</th>
                <div className="table-merge">Grade</div>
            </tr>
            
            <tr>
                <p></p>
                <th>10 %</th>
                <th>10 %</th>
                <th>10 %</th>
                <th>10 %</th>
                <th>40 %</th>
                
            </tr>
            
            <tbody>
            {data1.map((item, index) => (
                <tr key={index}>
                <td>{item.column1}</td>
                <td>{item.column2}</td>
                <td>{item.column3}</td>
                <td>{item.column4}</td>
                <td>{item.column5}</td>
                <td>{item.column6}</td>
                <td>{item.column7}</td>               
                </tr>
            ))}
            </tbody>
        </table> 

        <div className="TotalScores-container">
            {/* <table className='table'>
                
                <tr>
                    <th>Overall Marks</th>
                    <th></th>
                    
                </tr>
                
            </table> 

            <table className='table'>
                
                <tr>
                    <th>Percentage</th>
                    <th>Column 2</th>
                    
                </tr>
                
            </table> 

            <table className='table'>
                
                <tr>
                    <th>Grade</th>
                    <th>Column 2</th>
                    
                </tr>
                
            </table>  */}
        </div>

            {/* <div className="table1-2Container">
                <div className="table01">
                    <div className="Co-Scholastic">
                        Co-Scholastic Area <br></br>
                        (3 Point Grading Scale A,B,C)
                    </div>
                    <table className='table'>
                        
                        <tr>
                            <th>Term 1</th>
                            <th>Grade</th>
                            
                        </tr>
                        
                        <tbody>
                        {data2.map((item, index) => (
                            <tr key={index}>
                            <td>{item.column1}</td>
                            <td>{item.column2}</td>
                            
                            </tr>
                        ))}
                        </tbody>
                    </table> 
                </div>

                <div className="table01">
                    <div className="Co-Scholastic">
                        Discipline <br></br>
                        (3 Point Grading Scale A,B,C)
                    </div>
                    <table className='table'>
                        
                        <tr className="center">
                            <th>Term 1</th>
                            <th>Grade</th>
                            
                        </tr>
                        
                        <tbody>
                        {data3.map((item, index) => (
                            <tr key={index}>
                            <td>{item.column1}</td>
                            <td>{item.column2}</td>
                            
                            </tr>
                        ))}
                        </tbody>
                    </table> 
                </div>
                
            </div> */}
        </div>
            <div className="Remark">
                <p>Remark:</p>
                <p>Attendance:</p>
            </div>
    </div>
</div>
    
    );
  };
  
  const Test_Result_Sheet = () => {
    const Js1EngTest1 = parseInt(localStorage.getItem("Js1EngTest1")) || 0;
    const Js1EngTest2 = parseInt(localStorage.getItem("Js1EngTest2")) || 0;
    const Js1EngTest3 = parseInt(localStorage.getItem("Js1EngTest3")) || 0;
    const Js1EngTopicOneToOneScore = parseInt(localStorage.getItem("Js1EngTopicOneToOneScore")) || 0;


    // const Js1FirstEconsExamScore = localStorage.getItem("Js1FirstEconsExamScore")    
    // const js1FirstMathExamScore = localStorage.getItem("Js1FirstMathExamScore")  
    // const Js1FirstLitInEnglishExamScore = localStorage.getItem("Js1FirstLitInEnglishExamScore") 
    


    // const total = parseInt(Js1EngTest1) + parseInt(Js1EngTest2) + parseInt(Js1EngTest3) + parseInt(Js1EngTopicOneToOneScore);
    const engTestTotalScore = Js1EngTest1 + Js1EngTest2 + Js1EngTest3 + Js1EngTopicOneToOneScore;
    localStorage.setItem("engTestTotalScore", JSON.stringify(engTestTotalScore));

    
    
    const dataArray1 = [
        { column1: 'Matthematics', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: "", column6: 'Data 10', column7: ''},
        { column1: 'English', column2: <div className="TextAlign">{Js1EngTest1}</div>, column3: <div className="TextAlign">{Js1EngTest2}</div>, column4: <div className="TextAlign">{Js1EngTest3}</div>, column5: <div className="TextAlign">{Js1EngTopicOneToOneScore}</div>, column6: engTestTotalScore, column7: "" },
        { column1: 'Lit in English', column2: 'Data 12', column3: 'Data 13', column4: 'Data 14', column5:"", column6: 'Data 10', column7: "" },
        { column1: 'Social Studies', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19', column6: 'Data 10', column7: "" },
        { column1: 'Economics', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: "", column6: 'Data 10', column7: "" },
        { column1: 'Computer Studies', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: '', column6: 'Data 10', column7: "" },
        { column1: 'Basic Tech', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19', column6: 'Data 10', column7: "" },
        { column1: 'Agriculture', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19', column6: 'Data 10', column7: "" },
        { column1: 'Biology', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19', column6: 'Data 10', column7: "" },
        { column1: 'Yeroba', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19', column6: 'Data 10', column7: "" },  
        { column1: 'Chemistry', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19', column6: 'Data 10', column7: "" },
        { column1: 'CRK', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19', column6: 'Data 10', column7: "" },
    ];

      
      const dataArray2 = [
        { column1: 'thtgytgrfe ', column2: 'A', },
        { column1: 'Data 6', column2: 'B', },
        { column1: 'Data 11', column2: 'C',},
        { column1: 'Data 16', column2: 'D',},
        { column1: 'Data 16', column2: 'E',},
        { column1: 'Data 16', column2: 'F'},
        { column1: 'Data 16', column2: 'G'},
        { column1: 'Data 16', column2: 'H'},
        
      ];


      const dataArray3 = [
        { column1: 'thtgytgrfe ', column2: 'A', },
        { column1: 'Data 6', column2: 'B', },
        { column1: 'Data 11', column2: 'C',},
        { column1: 'Data 16', column2: 'D',},
        { column1: 'Data 16', column2: 'E',},
        { column1: 'Data 16', column2: 'F'},
        { column1: 'Data 16', column2: 'G'},
        { column1: 'Data 16', column2: 'H'},
       
      ];

      const dataArray4 = [
        { column1: 'Data 1', column2: 'Data 2', },
        
       
      ];

      return (
        <div>
             
               
                <Table data1={dataArray1} data2={dataArray2} data3={dataArray3} data4={dataArray4} />
            
            
            
      <style>
        {`
          .table {
            border-collapse: collapse;
            margin-top: 5px;
            margin-bottom: 5px;
          }
          
          .table th{
            border: 1px solid #dddddd;
            text-align: center;
            
          }

          .table td {
            border: 1px solid #dddddd;
            text-align: left;
            padding-top: 0; 
            padding-bottom: 0; 
        }
        `}
      </style>

    <div className="PrintButton">
      <button onClick={handlePrint}>Print</button>
    </div>
    </div>
    
  );
};
        
export default Test_Result_Sheet