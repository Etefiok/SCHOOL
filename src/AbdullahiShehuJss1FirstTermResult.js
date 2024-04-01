import React, {useState} from "react";
import './AbdullahiShehuResultStatus.css';
import "./AbdullahiShehu.css";
import { Navigate, useNavigate } from "react-router-dom";
import Ss1profileData from "./Ss1profileData";



const Table = ({ data}) => {
    const Students = Ss1profileData[0];

    return (

        <div className="FormBod">
        <div>
            <div className="FormContain">
                <div className="FormLogo">
                    <img src={require("./images.jpg/schoollogo.jpeg")}alt="logo" />
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
                                    (for official use only)
                                </div>
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
                <div className="StudentName">
                {Students.name}
                </div>

                <div>
                {Students.PaymentStatus}
                </div>

                <p>JSS1 <br></br>
                First Term Result</p>
            </div>

      <table className='table'>
        <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              <td>{item.column3}</td>
              <td>{item.column4}</td>
              <td>{item.column5}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };
  
  const AbdullahiShehuJss1FirstTermResult = () => {
      const handlePrint = () => {
        const printContents = document.querySelector('.printable-area').outerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
      };


      const dataArray = [
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5' },
        { column1: 'Data 6', column2: 'Data 7', column3: 'Data 8', column4: 'Data 9', column5: 'Data 10' },
        { column1: 'Data 11', column2: 'Data 12', column3: 'Data 13', column4: 'Data 14', column5: 'Data 15' },
        { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
        { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
        { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
        { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
        { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
        { column1: '', column2: '', column3: '', column4: '', column5: '' },
      ];
        

      return (
        <div>
             <div className="printable-area">
                
                <Table data={dataArray} />
            </div>

      <style>
        {`
          .table {
            border-collapse: collapse;
            width: 100%;
            
          }
          .table th, .table td {
            border: 1px solid #dddddd;
            text-align: left;
            padding-right: 8px;
            padding-left: 8px;
          }
        `}
      </style>

      <div className="PrintButton">
      <button onClick={handlePrint}>Print</button>
    </div>
    </div>
  );
};
        
export default AbdullahiShehuJss1FirstTermResult