import React, {useState} from "react";
import Ss1profileData from "./Ss1profileData";
import './AbdullahiShehu.css'




const AbdullahiShehuJss3 = () => {
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
                            <label htmlFor="dateInput">Payment Date: </label>
                            <input
                                type="date"
                                id="dateInput"
                                value={selectedDate}
                                onChange={handleDateChange} required/><br></br>
                            {Students.payment3.PartPaymentThirdTerm03}<br></br>
                            {Students.payment3.BalancePaymentThirdTerm03}<br></br>
                           <p>{Students.payment3.Total09}</p>
                            {/* <button type="submit">Submit</button> */}
                            </form>
                </div>

                <div>         
                Being fees for: {Students.Status9}
                </div>

                <div className="StudentName">
                <h4> {Students.duration9}</h4>
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
                            <label htmlFor="dateInput">Payment Date:&nbsp; </label>
                            <input
                                type="date"
                                id="dateInput"
                                value={selectedDate}
                                onChange={handleDateChange} required/>
                            <br></br>
                            {Students.payment3.PartPaymentSecondTerm03}<br></br>
                            {Students.payment3.BalancePaymentSecondTerm03}<br></br>
                           <p>{Students.payment3.Total08}</p>
                                                        {/* <button type="submit">Submit</button> */}
                            </form>
                </div>

                <div>         
                Being fees for:{Students.Status8}
                </div>

                <div className="StudentName">
                <h4> {Students.duration8}</h4>
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
                            <label htmlFor="dateInput">Payment Date:&nbsp; </label>
                            <input
                                type="date"
                                id="dateInput"
                                value={selectedDate}
                                onChange={handleDateChange} required/>

                            <br></br>
                            {Students.payment3.PartPaymentFirstTerm03}<br></br>
                            {Students.payment3.BalancePaymentFirstTerm03}<br></br>
                           <p>{Students.payment3.Total07}</p>
                            {/* <button type="submit">Submit</button> */}
                            </form>
                </div>

                <div>         
                Being fees for:{Students.Status7}
                </div>

                <div className="StudentName">
                <h4> {Students.duration7}</h4>
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

export default AbdullahiShehuJss3