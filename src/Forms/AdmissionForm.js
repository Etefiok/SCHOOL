import NavBar_out from "../NavBar_out";
import Navba from "../NavBar_out";
import './AdmissionForm.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



const AdmissionForm = () => {
    const [passportImage, setPassportImage] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const Navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [message, setMessage] = useState('');
    const maxWords = 100;



    const handlePassportUpload = (event) => {
        const imageFile = event.target.files[0];
        setPassportImage(imageFile);
      };

      
      const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
      };
    
      
  function HomePage() {
    Navigate('/ ')
}


  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };


  const handleInputChange = (event) => {
    const inputMessage = event.target.value;
    const words = inputMessage.split(/\s+/);
    if (words.length <= maxWords) {
        setMessage(inputMessage);
    } else {
        const trimmedMessage = words.slice(0, maxWords).join(" ");
        setMessage(trimmedMessage);
    }
};

const wordsLeft = maxWords - message.split(/\s+/).filter(word => word !== '').length;

    const handleSubmit = (event) => {
        document.getElementById('myForm').submit();
        window.location.href = 'PaymentPage';
      };



    return(
        <div>
           
        <NavBar_out />
    
            
            <div className="FormBody">

            <div className="FormHeading">
                    <p>ADMISSION FORM</p>
                </div>
                <div>
                    <div className="FormContainer">
                        <div className="Formimage">
                            <img src={require("../images.jpg/schoollogo.jpeg")}alt="logo" />
                        </div>

                            <div>
                                <div className="SchoolName">
                                    <p>SAMPLE SECONDARY SCHOOL</p>
                                </div> 
                                    <div className="RegistrationNumber">
                                            <p>Registration Number</p>
                                        <div className="table">
                                        
                                            <table >
                                                <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                </tr>
                                            </table>
                                            <p>(for official use only)</p>
                                        </div>
                                    </div>
                            </div>        
                    
                                        <div className="passport">
                                                {passportImage && <img src={URL.createObjectURL(passportImage)} alt="Passport Preview"  style={{ maxWidth: '100%', maxHeight: '100%' }}  />}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handlePassportUpload} required
                                                />
                                        </div>
                    </div>
                </div>
            
                <div className="Date">
                            <form id="myForm" action="/submit-form"
                            // onSubmit={handleSubmit}
                            >
                            {/* <label htmlFor="dateInput">Date:&nbsp; </label>
                            <input
                                type="date"
                                id="dateInput"
                                value={selectedDate}
                                onChange={handleDateChange} required
                            /> */}
                            {/* <button type="submit">Submit</button> */}
                            </form>
                </div>

                


                <div className="formAdd">                   
                        <div className="Names">
                            <div className="formNames">
                                <input type="text" id="fullName" placeholder="Surname" required />
                                <label htmlFor="fullName">Surname</label>
                            </div>

                            <div className="formNames">
                                <input type="text" id="fullName" placeholder="Name" required/>
                                <label htmlFor="fullName">Name</label>
                            </div>

                            
                            <form className="formNames">
                            <input 
                                type="date"
                                id="dateInput"
                                value={selectedDate}
                                onChange={handleDateChange} required
                            />
                            <label htmlFor="dateInput">Date Of Birth &nbsp; </label>
                            </form>
                        </div>

                        <div className="Names">
                            <div className="formName">
                                <input type="text" id="fullName" placeholder="Father's Name" required/>
                                <label htmlFor="fullName">Father's Name</label>
                            </div>

                            <div className="formName">
                                <input type="text" id="fullName" placeholder="Mother's Name" required/>
                                <label htmlFor="fullName">Mother's Name</label>
                            </div>
                        </div>
                
                    <div className="formEmail">
                        <input type="email" id="emailAddress" placeholder="Your email" required/>
                        <label htmlFor="emailAddress">Your email</label>
                    </div>

                    <div className="formEmail">
                        <input type="text" id="position" placeholder="Class" required/>
                        <label htmlFor="text">Class</label>
                    </div>

                    <div className="formEmail">
                        <p>Upload your birth certificate here (pdf format) only</p>
                        <input type="file" id="resume" accept=".pdf" required/>
                        <label htmlFor="resume">Upload Resume (PDF only)</label>
                    </div>
                </div>


                    <div className="Statefile">
                            <div className="formName">
                                {/* <input type="text" id="fullName" placeholder="Place of Birth" /> */}
                                <label htmlFor="state">Place of Birth:</label>
                                <select id="state" name="state" required>
                                    <option value="lagos"></option>
                                    <option value="abuja">Abuja</option>
                                    <option value="rivers">Rivers</option>
                                    <option value="kano">Kano</option>
                                    
                                </select>
                            </div>

                            <div className="formName">
                                {/* <input type="text" id="fullName" placeholder="City" /> */}
                                <label for="state">City:</label>
                                <select id="state" name="state" required>
                                    <option value="lagos"></option>
                                    <option value="abuja">Abuja</option>
                                    <option value="rivers">Rivers</option>
                                    <option value="kano">Kano</option>
                                    
                                </select>
                            </div>

                            <div className="formName">
                                {/* <input type="text" id="fullName" placeholder="District" /> */}
                                <label for="state">District:</label>
                                <select id="state" name="state" required>
                                    <option value="lagos"></option>
                                    <option value="lagos">Lagos</option>
                                    <option value="abuja">Abuja</option>
                                    <option value="rivers">Rivers</option>
                                    <option value="kano">Kano</option>
                                    
                                </select>
                            </div>

                            <div className="formName">
                                {/* <input type="text" id="fullName" placeholder="State" /> */}
                                <label for="state">State:</label>
                                <select id="state" name="state" required>
                                    <option value="lagos"></option>
                                    <option value="abuja">Abuja</option>
                                    <option value="rivers">Rivers</option>
                                    <option value="kano">Kano</option>
                                    
                                </select>                                
                            </div>
                        </div>


                    <div className="formAdd">  <br/>                        
                        <div className="Names">
                            <div className="formName">
                                <input type="text" id="fullName" placeholder="Mother's Tongue" required/>
                                <label htmlFor="fullName">Mother Tongue</label>
                            </div>

                            <div className="formName">
                                <input type="text" id="fullName" placeholder="Religion" required/>
                                <label htmlFor="fullName">Religion</label>
                            </div>
                        </div>
                    </div>  



                    <div className="formAdd">
                        <div className="formEmail">
                            <input type="email" id="emailAddress" placeholder="Name of the school Last attended" required/>
                            <label htmlFor="emailAddress">Name of the school Last attended</label>
                        </div>

                        <div className="formEmail">
                            <input type="text" id="position" placeholder="Standard of which admission is sought" required/>
                            <label htmlFor="text">Standard of which admission is sought</label>
                        </div>  

                        <div className="formEmail">
                            <input type="text" id="position" placeholder="Residential Address" required/>
                            <label htmlFor="text">Residential Address</label>
                        </div>  
                    </div>


                    <div className="Statefile2">
                            <div className="formName">
                                {/* <input type="text" id="fullName" placeholder="City" /> */}
                                <label for="state">City:</label>
                                <select id="state" name="state" required>
                                    <option value="lagos"></option>
                                    <option value="abuja">Abuja</option>
                                    <option value="rivers">Rivers</option>
                                    <option value="kano">Kano</option>
                                    
                                </select>
                            </div>

                            <div className="formName">
                                {/* <input type="text" id="fullName" placeholder="District" /> */}
                                <label for="state">State:</label>
                                <select id="state" name="state" required>
                                    <option value="lagos"></option>
                                    <option value="lagos">Lagos</option>
                                    <option value="abuja">Abuja</option>
                                    <option value="rivers">Rivers</option>
                                    <option value="kano">Kano</option>
                                    
                                </select>
                            </div>

                            <div className="formName">
                                {/* <input type="text" id="fullName" placeholder="State" /> */}
                                <label for="state">Pin Code:</label>
                                <select id="state" name="state" required>
                                    <option value="lagos"></option>
                                    <option value="abuja">Abuja</option>
                                    <option value="rivers">Rivers</option>
                                    <option value="kano">Kano</option>
                                    
                                </select>                                
                            </div>
                        </div>


                    <div className="MedicalInformation">Medical Information</div>

                        <div className="Disability">
                            <label>Any Disability: &nbsp;
                                <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange} 
                                />
                                Yes
                            </label>


                            <label> &nbsp;
                                <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                />
                                No
                            </label>
                        </div>


                        <div className="formAdd">                       
                            <div className="Names">
                                <div className="formName">
                                    <input type="text" id="fullName" placeholder="Blood Group" />
                                    <label htmlFor="fullName">Blood Group</label>
                                </div>

                                <div className="formName">
                                    <input type="text" id="fullName" placeholder="Identification Mark" />
                                    <label htmlFor="fullName">Identification Mark</label>
                                </div>
                            </div>
                        </div>  

                        <div className="formAdd">
                    
                            <div className="formEmail">
                                <textarea type="Message" id="Message" placeholder="Your message here" value={message}
                                 onChange={handleInputChange}></textarea>
                                {/* <p>Words left: {wordsLeft}</p> */}
                                <label htmlFor="Message">Words left: {wordsLeft}</label>
                            </div>

           
                                <div className="No-Refund">
                                <p>Note: No refund of any fees after payment.</p>
                                </div>
                            <div className="centerbtn">
                                <button onClick={handleSubmit} type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
            </div>
     );
};

export default AdmissionForm