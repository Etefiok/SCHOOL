import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { useEffect, useState } from 'react';
import Exams from './Exams';
import MyPicture from './MyPicture';
import LoginForExams from './LoginForExams';
import { Routes, Route } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import Adding from './AddDetailsPage';
import NavBar from './NavBar';
import ClassesForExams from './Js1LearningArea/ClassesForExams';
import Subjects_For_Exams from './SubjectPage_For_Exams';
import Performance from './Performance';
import SignUp from './SignUp';
import ForgetPassword from './ForgetPassword';
import ContactForm from './Forms/Contactform';
import Login from './Loginforpage';
// import Loginforpage from './Loginforpage';
import Studentsprofile from './studentsprofile';
import Ss1profilemap from './Ss1profilemap';
import AbdullahiShehu from './AbdullahiShehu';
import Tyronneebuehi from './tyronneebuehi';
import Adminpage from './AdminPage';
import Loginforss1 from './Loginforss1';
import DropdownPage from './DropdownPage'
import Loginforparent from './Loginforparent';
import Login2 from './Login2';
import HomePage_out from './HomePage_out';
import Login_Student from './Login_Student';
import HomePage_Student from './Hompage_Student';
import AbdullahiShehuJss1ThirdTermResult from './AbdullahiShehuJss1ThirdTermResult';
import AbdullahiShehuJss1SecondTermResult from './AbdullahiShehuJss1SecondTermResult';
import InstructionLitInEnglishExams from './Jss1ExamsFolder/InstructionLitInEnglishExams';
import InstructionEnglishExams from './Jss1ExamsFolder/InstructionEglishExams';
import LitInEnglish from './Jss1ExamsFolder/LitInEnglish';
import Jss1session from './Jss1session';
import VideoPlayer1 from './VideoSources/VideoPlayer1';
import Classes from './Js1LearningArea/Classes';
import Js1SubjectForLearning from './Js1LearningArea/Js1SubjectForLearning';
import LearnEconomics from './Js1LearningArea/LearnEconomics';
import ApplicationForm from './Forms/ApplicationForm';
import AdmissionForm from './Forms/AdmissionForm';
import LearnEnglish from './Js1LearningArea/LearnEnglish';
import School_Calendar_Page from './School_Calendar_Page';
import English from './Jss1ExamsFolder/English';
import Test_Result_Sheet from './Js1_English_Test_ResultSheet_folder/Test_Result_Sheet';
import Login_Admin from './Login_Admin';

import SideNavBar from './SideNavBar/SideNavBar';
import School_Calendar_on_front from './School_Calendar_on_front';
import About_Us_Page from './About_Us_Folder/About_Us_Page';
import HomePage_Admin from './HomePage_Admin';
import StarBlink from './StarBlink';
// import JAMB_Recomended_TextBook from './JAMB_Recomended_TestBook';

function App() {

  const [backendData, setBackendData] = useState([{}])


  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  const updateScore = (newScore) => {
    function calculateScore(answers, correctAnswers) {
      let score = 0;
    
      // Loop through each answer and compare it with the correct answer
      answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
          // If the answer is correct, increment the score
          score++;
        }
      });
    
      return score;
    }
  };

  const details = [
    {
    firstName: "Emmanuel",
    lastName: "Omole",
    age: 10,
    gender: "male",
    skinColor: "brown",
    idNumber: 56758,
    isUserLoggedIn: true,
    accountNumber: 123456789,
    accountBalance: 12345,
    location: {
        postalCode: 100242,
        city: "kosofe",
        state: "lagos"
    }
  },
    {
    firstName: "Mary",
    lastName: "Doe",
    age: 20,
    gender: "female",
    skinColor: "brown",
    idNumber: 56587,
    isUserLoggedIn: false,
    accountNumber: 123456798,
    accountBalance: 1234500,
    location: {
        postalCode: 100242,
        city: "isale-eko",
        state: "lagos"
    }
  },
    {
    firstName: "Cyril",
    lastName: "Stober",
    age: 29,
    gender: "male",
    skinColor: "brown",
    idNumber: 56500,
    isUserLoggedIn: true,
    accountNumber: 123456798,
    accountBalance: 104500,
    location: {
        postalCode: 100243,
        city: "ikorodu",
        state: "lagos"
    }
  },
  {
    firstName: "Leke",
    lastName: "Diligent",
    age: 34,
    gender: "female",
    skinColor: "black",
    idNumber: 565435,
    isUserLoggedIn: false,
    accountNumber: 123456798,
    accountBalance: 104500,
    location: {
        postalCode: 100243,
        city: "ikorodu",
        state: "lagos"
    }
  }
  ];

  return (
    <div>
 
      <Routes>

      
<Route path='StarBlink' element = {<StarBlink />} />


      <Route path='About_Us_Page' element = {<About_Us_Page />} />


      <Route path='Test_Result_Sheet' element={<Test_Result_Sheet />} />
      {/* <Route path='/' element={<HomePage users={details}/>} />  */}

      <Route exact path='/' element={<HomePage_out />} /> 
      <Route path='/Login_Student' element={<Login_Student />} /> 
      {/* <Redirect from="/" to="/Login_Student" /> */}
      <Route path='/Login_Admin' element={<Login_Admin />} />
      <Route path='/Homepage_Student' element={<HomePage_Student />} /> 
      <Route path='/HomePage_Admin' element={<HomePage_Admin />} />


      <Route path='/details/:idnumber' element={<details users={details} />} /> 
      <Route path="/performance" element={<Performance />} />  
      <Route path="/Subjects_For_Exams" element={<Subjects_For_Exams />} />
        <Route path="/loginforexams" element={<LoginForExams />} />
        <Route path='/loginforparent' element={< Loginforparent/>} />
        <Route path='ClassesForExams' element={<ClassesForExams />} />
        <Route path="/exams" element={<Exams />} />  
        <Route path="/mypicture" element={<MyPicture />} />  
        <Route path="/adddetails" element={<Adding />} /> 
        <Route path='/navbar' element={<NavBar />} /> 
        <Route path='/signUp' element={<SignUp />} /> 
        <Route path='/forgetpassword' element={<ForgetPassword />} /> 
        <Route path='/contactform' element={<ContactForm />} /> 
        <Route path='/contactform' element={<ContactForm />} />        
        <Route path='/ss1profilemap' element={<Ss1profilemap />} />
        <Route path='/abdullahishehu' element={<AbdullahiShehu />} />
        <Route path='/tyronneebuehi' element={<Tyronneebuehi />} />
        <Route path='/adminpage' element={<Adminpage />} />
        <Route path='/Loginforss1' element = {<Loginforss1 />} />
        <Route path='/login2' element = {<Login2 />} />
        <Route path='/ApplicationForm' element = {<ApplicationForm />} />
        <Route path='/AdmissionForm' element = {<AdmissionForm />} />

        
         <Route path='/SideNavBar' element = {<SideNavBar />} /> {/*side nav bar */}
        
        
         <Route path='/School_Calendar_on_front' element = {<School_Calendar_on_front />} />
         <Route path='/School_Calendar_Page' element = {<School_Calendar_Page />} />
         

         {/* <Route path='/JAMB_Recomended_TextBook' element = {<JAMB_Recomended_TextBook />} /> */}
           
        
        <Route path='/AbdullahiShehuJss1ThirdTermResult' element = {<AbdullahiShehuJss1ThirdTermResult />} />
        <Route path='/AbdullahiShehuJss1SecondTermResult' element = {<AbdullahiShehuJss1SecondTermResult />} />

        
        <Route path='/InstructionLitInEnglishExams' element = {<InstructionLitInEnglishExams />} />
        <Route path='/LitInEnglish' element = {<LitInEnglish updateScore={updateScore}/>} />

        <Route path='/InstructionEnglishExams' element = {<InstructionEnglishExams/>} />
        <Route path='/English' element = {<English updateScore={updateScore}/>} />


        
        
        


        <Route path='/Jss1session' element = {<Jss1session />} />

       
        <Route path='/Ss1profilemap' element = {<Ss1profilemap />} />


        <Route path='/VideoPlayer1' element = {<VideoPlayer1 />} />

        

        <Route path='/Classes' element = {<Classes />} />



        <Route path='/Js1SubjectForLearning' element = {<Js1SubjectForLearning />} />



{/* learning Area */}
<Route path='/LearnEconomics' element = {<LearnEconomics updateScore={updateScore}/>} />
<Route path='/LearnEnglish' element = {<LearnEnglish updateScore={updateScore}/>} />







        
        </Routes>
 
        </div>
  );
}
     

export default App

