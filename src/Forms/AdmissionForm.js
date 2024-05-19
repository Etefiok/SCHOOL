import NavBar_out from "../NavBar_out";
import Navba from "../NavBar_out";
import './AdmissionForm.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import axios from "axios";




const AdmissionForm = () => {
    const [passportImage, setPassportImage] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const Navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [isNotChecked, setIsNotChecked] = useState(false);
    const [message, setMessage] = useState('');
    const maxWords = 100;



    
      const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
      };
    
      
  function HomePage() {
    Navigate('/ ')
}


  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };


  const handleNotCheckboxChange = (event) => {
    setIsNotChecked(event.target.checked);
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

    // const handleSubmit = (event) => {
    //     document.getElementById('myForm').submit();
    //     window.location.href = 'PaymentPage';
    //   };


      const [accepted, setAccepted] = useState(false);

      const handleAcceptance = () => {
        setAccepted(!accepted);
      };
    



// State variables for the form fields
const [fullName, setFullName] = useState('');
const [motherName, setMotherName] = useState('');
const [dob, setDob] = useState('');
const [residentialAddress, setResidentialAddress] = useState('');
const [email, setEmail] = useState('');
const [className, setClassName] = useState('');
const [motherTongue, setMotherTongue] = useState('');
const [religion, setReligion] = useState('');
const [birthCertificate, setbirthCertificate] = useState(null);
const [placeOfBirth, setPlaceOfBirth] = useState('');
const [city, setCity] = useState('');
const [district, setDistrict] = useState('');
const [state, setState] = useState('');
const [lastSchoolAttended, setLastSchoolAttended] = useState('');
const [admissionStandard, setAdmissionStandard] = useState('');
const [disability, setDisability] = useState(false);
const [bloodGroup, setBloodGroup] = useState('');
const [identificationMark, setIdentificationMark] = useState('');


const handlePassportUpload = (event) => {
    const imageFile = event.target.files[0];
    setPassportImage(imageFile);
  };

  const handleBirthCertificateUpload = (event) => {
    const certificateFile = event.target.files[0];
    setbirthCertificate(certificateFile);
  };
  

const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('fullName', fullName);
  formData.append('motherName', motherName);
  formData.append('dob', dob);
  formData.append('residentialAddress', residentialAddress);
  formData.append('email', email);
  formData.append('className', className);
  formData.append('motherTongue', motherTongue);
  formData.append('religion', religion);
  formData.append('birthCertificate', birthCertificate);
  formData.append('placeOfBirth', placeOfBirth);
  formData.append('city', city);
  formData.append('district', district);
  formData.append('state', state);
  formData.append('lastSchoolAttended', lastSchoolAttended);
  formData.append('admissionStandard', admissionStandard);
  formData.append('disability', disability);
  formData.append('bloodGroup', bloodGroup);
  formData.append('identificationMark', identificationMark);
  formData.append('message', message);
  formData.append('passportImage', passportImage);
//   formData.append('birthCertificate', birthCertificate);

  try {
    await axios.post('http://localhost:5000/auth/admission-form', formData);
    console.log('Form submitted successfully');
    // Reset the form fields or redirect the user to a success page
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

    return(
        <div>
           
        <NavBar_out />
    
            
            <form onSubmit={handleSubmit} className="FormBody">

            <div className="FormHeading">
                    <p>ADMISSION FORM</p>
                </div>
                {/* <div> */}
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
                {/* </div> */}
            
                <div className="formAdd"> 
                      <div className="NameContainer">                  
                        <div className="NameContainerside">
                            <div className="formNames">
                                <input type="text" id="fullName" placeholder="Surname" required />
                                <label htmlFor="fullName">Surname</label>
                            </div>

                            <div className="formNames">
                                <input type="text" id="fullName" placeholder="Full Name" required/>
                                <label htmlFor="fullName">Full name</label>
                            </div>

                            
                            <div className="formNames">
                                <input type="text" id="fullName" placeholder="Mother's Name" required/>
                                <label htmlFor="fullName">Mother's Name</label>
                            </div>

                            <div className="formNames">
                                <input type="number" id="fullName" placeholder="DofB DD/MM/YY" required/>
                                <label htmlFor="fullName">DofB DD/MM/YY</label>
                            </div>  

                            <div className="formNames">
                                <input type="text" id="position" placeholder="Residential Address" required/>
                                <label htmlFor="text">Residential Address</label>
                            </div> 

                            <div className="formNames">
                                <input type="email" id="emailAddress" placeholder="Your email" required/>
                                <label htmlFor="emailAddress">Your email</label>
                            </div> 

                            <div className="formNames">
                                <input type="text" id="position" placeholder="Class" required/>
                                <label htmlFor="text">Class</label>
                            </div>

                            <div className="formNames">
                                <input type="text" id="fullName" placeholder="Mother's Tongue" required/>
                                <label htmlFor="fullName">Mother Tongue</label>
                            </div>

                            <div className="formNames">
                                <input type="text" id="fullName" placeholder="Religion" required/>
                                <label htmlFor="fullName">Religion</label>
                            </div>

                        </div>

                        <div className="NameContainerside">
                            <div className="formNames">
                                <div className="ImportImage">
                                    <p>Upload Birth Certificate (JPG only)</p>
                                    <input type="file" 
                                    id="birthCertificate" 
                                    accept=".jpg" 
                                    onChange={handleBirthCertificateUpload}
                                    required />
                                    <label htmlFor="birthCertificate">Upload Birth Certificate (JPG only)</label>
                                </div>
                            </div>
                            <div className="Statefile">
                                <div className="formName">
                                    {/* <input type="text" id="fullName" placeholder="Place of Birth" /> */}
                                    <div htmlFor="state">Place of Birth:
                                    <select id="state" name="state" required>
                                        <option value="lagos"></option>
                                        <option value="abuja">Abuja</option>
                                        <option value="rivers">Rivers</option>
                                        <option value="kano">Kano</option>
                                        
                                    </select>
                                    </div>
                                </div>

                                <div className="formName">
                                    {/* <input type="text" id="fullName" placeholder="City" /> */}
                                    <div for="state">City:
                                    <select id="state" name="state" required>
                                        <option value="lagos"></option>
                                        <option value="abuja">Abuja</option>
                                        <option value="rivers">Rivers</option>
                                        <option value="kano">Kano</option>
                                        
                                    </select>
                                    </div>
                                </div>

                                <div className="formName">
                                    {/* <input type="text" id="fullName" placeholder="District" /> */}
                                    <div for="state">District:
                                    <select id="state" name="state" required>
                                        <option value="lagos"></option>
                                        <option value="lagos">Lagos</option>
                                        <option value="abuja">Abuja</option>
                                        <option value="rivers">Rivers</option>
                                        <option value="kano">Kano</option>
                                        
                                    </select>
                                    </div>
                                </div>

                                <div className="formName">
                                    {/* <input type="text" id="fullName" placeholder="State" /> */}
                                    <div for="state">State:
                                    <select id="state" name="state" required>
                                        <option value="lagos"></option>
                                        <option value="abuja">Abuja</option>
                                        <option value="rivers">Rivers</option>
                                        <option value="kano">Kano</option>
                                        
                                    </select>   
                                    </div>                             
                                </div>
                            </div>

                            <div className="formEmail">
                                <input type="email" id="emailAddress" placeholder="Name of the school Last attended" required/>
                                <label htmlFor="emailAddress">Name of the school Last attended</label>
                            </div>

                            <div className="formEmail">
                                <input type="text" id="position" placeholder="Standard of which admission is sought" required/>
                                <label htmlFor="text">Standard of which admission is sought</label>
                            </div> 

                            <div className="MedicalInformation">Medical Information</div>

<div className="Disability">
    <div>Any Disability:<input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange} 
        />
        Yes
    </div>
        

    <div>
        <input
        type="checkbox"
        checked={isNotChecked}
        onChange={handleNotCheckboxChange}
        />
        No
    </div>
</div>
<br></br>


                            <div className="Names">
                                <div className="formName">
                                    <input type="text" id="fullName" placeholder="Blood Group" />
                                    <label htmlFor="fullName">Blood Group</label>
                                </div>

                                <div className="formName">
                                    <input type="text" id="fullName" placeholder="Identification Mark (if any)" />
                                    <label htmlFor="fullName">Identification Mark (if any)</label>
                                </div>
                            </div>
<br></br>
                            <div className="formEmail">
                                <textarea 
                                type="Message" 
                                id="Message" 
                                placeholder="Your message here" 
                                style={{ height: "153px"}}
                                value={message}
                                onChange={handleInputChange}></textarea>
                                {/* <p>Words left: {wordsLeft}</p> */}
                                <label htmlFor="Message">Words left: {wordsLeft}</label>
                            </div>
                        </div>

                      </div>
                </div>
 
                                <div className="No-Refund">
                                <p>
        By checking the box below, you agree to our
        <a href="/terms-and-conditions" target="_blank">
           Terms and Conditions
        </a>
      </p>
      <div style={{display: "flex", justifyContent: "center"}}>
        <input
          type="checkbox"
          checked={accepted}
          onChange={handleAcceptance}
          id="terms-checkbox"
          
        />
        <div htmlFor="terms-checkbox">
          I have read and accept the Terms and Conditions
        </div>
      </div>
      {!accepted && (
        <p style={{ color: 'red' }}>
          You must accept the Terms and Conditions to proceed.
        </p>
      )}
      <Button type="submit" disabled={!accepted}>Submit</Button>
                                </div>

                    </form>
            </div>
     );
};

export default AdmissionForm