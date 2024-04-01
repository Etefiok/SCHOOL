import React, {useState} from "react";
import Ss1profileData from "./Ss1profileData";
import './AbdullahiShehu.css'




const AbdullahiShehuJss1 = () => {
    const Students = Ss1profileData[0];
    const [passportImage, setPassportImage] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');

    const handlePrint1 = () => {
        const printContents = document.querySelector('.printable1').outerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        };

    const handlePrint2 = () => {
        const printContents = document.querySelector('.printable2').outerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        };


    const handlePrint3 = () => {
        const printContents = document.querySelector('.printable3').outerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        };

      const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
      };



    return(
    <div>

        <div className="printable1">
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

                        <div className="StudentName">
                        {Students.name}
                        </div>

                        <div className="StudentStatus">
                        {Students.PaymentStatus}
                        </div>

                <div className="AdmissionDate">
                            <form 
                            // onSubmit={handleSubmit}
                            >
                            {Students.paymentDate3}<br></br>
                            {Students.payment1.PartPaymentThirdTerm01}<br></br>
                            {Students.payment1.BalancePaymentThirdTerm01}<br></br>
                           <p>{Students.payment1.Total03}</p>
                            {/* <button type="submit">Submit</button> */}
                            </form>
                </div>

                <div>         
                Being fees for: {Students.Status3}
                </div>

                <div className="StudentName">
                <h4> {Students.duration3}</h4>
                </div>
           
                <button onClick={handlePrint1}>Print</button>
            </div>
    </div>
        


<div>
    <br/>
</div>



           <div className="printable2">
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

                    <div className="StudentName">
                        {Students.name}
                        </div>

                        <div className="StudentStatus">
                        {Students.PaymentStatus}
                        </div>



                        <div className="AdmissionDate">
                            <form 
                            // onSubmit={handleSubmit}
                            >
                            {Students.paymentDate2}<br></br>
                            <br></br>
                            {Students.payment1.PartPaymentSecondTerm01}<br></br>
                            {Students.payment1.BalancePaymentSecondTerm01}<br></br>
                           <p>{Students.payment1.Total02}</p>
                                                        {/* <button type="submit">Submit</button> */}
                            </form>
                </div>

                <div>         
                Being fees for:{Students.Status2}
                </div>

                <div className="StudentName">
                <h4> {Students.duration2}</h4>
                </div>
           
                <button onClick={handlePrint2}>Print</button>
           </div>
        </div>
           
        


<div>
    <br/>
</div>
            <div className="printable3">
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
                
                
                    <div className="StudentName">
                        {Students.name}
                        </div>

                        <div className="StudentStatus">
                        {Students.PaymentStatus}
                        </div>



                        <div className="AdmissionDate">
                            <form 
                            // onSubmit={handleSubmit}
                            >
                            {Students.paymentDate1}<br></br>
                            <br></br>
                            {Students.payment1.PartPaymentFirstTerm01}<br></br>
                            {Students.payment1.BalancePaymentFirstTerm01}<br></br>
                           <p>{Students.payment1.Total01}</p>
                            {/* <button type="submit">Submit</button> */}
                            </form>
                </div>

                <div>         
                Being fees for:{Students.Status1}
                </div>

                <div className="StudentName">
                <h4> {Students.duration1}</h4>
                </div>
           
                <button onClick={handlePrint3}>Print</button>
           </div>
           </div>



           <div>
    <br/>
</div>
           

        </div>     
    );
}

export default AbdullahiShehuJss1