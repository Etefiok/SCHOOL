import React from "react"
import Ss1profileData from "./Ss1profileData";




const AbdullahiShehuPayment = () => {
    const Students = Ss1profileData[0];   



    return(
        <div className="ResultBod">
            
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
                
                <p className="name">{Students.name}</p>         
                {/* <p>{Students.PaymentStatus}</p> */}
                <p className="PaymentStatus">Payment Status: {Students.PaymentStatus}</p>
                <p className="PaymentDate">Payment Date: {Students.PaymentDate}</p>
                <p className="PaymentDate">First Payment: {Students.FirstPayment}</p>
                <p className="PaymentDate">Second Payment: {Students.SecondPayment}</p>
                <p className="PaymentDate">Third Payment: {Students.ThirdPayment}</p>
                <p className="PaymentDate">Total: {Students.ThirdPayment}</p>
                <p className="feepurpose">Being Fees for: Third Term Jss1</p>
                <h3>May 2024 to Jul 2024</h3>

            </div>
            </div>

    );
}

export default AbdullahiShehuPayment