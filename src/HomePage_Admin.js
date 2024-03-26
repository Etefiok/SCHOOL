import React, { useState, useEffect } from 'react';
import Navba from "./NavBar_out";
import Details from "./Details";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Notification from './notification';
import TodoApp from './TodoApp';
import SidebarWithTabs from './SideBarWithTabs';
import NavBar_Admin from './NavBar_Admin';
// import DarkModePageToggle from './DarkModePageToggle';






const HomePage_Admin =({ users}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };



  
  const item = [

  'https://st5.depositphotos.com/77016494/64608/i/450/depositphotos_646087742-stock-photo-template-back-school-art-school.jpg',
 
  'https://st2.depositphotos.com/45722682/44893/i/450/depositphotos_448937986-stock-photo-illustration-design-opening-school-corona.jpg',

  'https://st.depositphotos.com/66268688/60461/v/450/depositphotos_604612310-stock-illustration-vector-illustration-modern-schools-cartoon.jpg',

  'https://media.istockphoto.com/id/842856514/sv/vektor/modern-skola-byggnader-exteri%C3%B6r-student-city-konceptet-grundskola-fasad-urban-street-bakgrund.jpg?s=1024x1024&w=is&k=20&c=MntTiTOpOkydi8lSYJzv0vXXV5Itcgc7A2l482OPl2s=',
];
 

  
  return (
    <div>
       {/* <div className='SwitchContainer'>
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
     */}
      <nav>
        <NavBar_Admin />
      </nav>
      <div className='righttext'>
        
      <button className='righttex'>
      <img src={require("./images.jpg/award1.jpeg")}alt="logo" />
      <p>this is the winning team</p>
      
        </button>
       
       <button className='righttex'>
        <p>Rightjkghjkgkjgkjjklhkjhkjhjkhkjhfjhjh<br></br>
        jhgjkgkjgkjgkjgkjdfhdhddhfhjhgjhgjh<br></br>
        khlkhlkhlkhlkhlkhlkhjhgjhgjhgjhgjhgj</p>
      </button>

      <button className='righttex'>
        <p>Rightjkghjkgkjgkjjklhkjhkjhjkhkjhfjhjh<br></br>
        jhgjkgkjgkjgkjgkjdfhdhddhfhjhgjhgjh</p>
        </button>
   


</div>


      <div className="imageCarouse">
      <div className="imageCarousel">
      </div>
      </div>

      <div className='lefttext'>
      <button className='righttex'>
      <img src={require("./images.jpg/award1.jpeg")}alt="logo" />
      <p>the winning team</p>
      </button>
        
   
<button className='righttex'>
        <p>Rightjkghjkgkjgkjjklhkjhkjhjkhkjhfjhjh<br></br>
        jhgjkgkjgkjgkjgkjdfhdhddhfhjhgjhgjh<br></br>
        khlkhlkhlkhlkhlkhlkhjhgjhgjhgjhgjhgj</p>
      </button>

      <button className='righttex'>
        <p>Rightjkghjkgkjgkjjklhkjhkjhjkhkjhfjhjh<br></br>
        jhgjkgkjgkjgkjgkjdfhdhddhfhjhgjhgjh</p>
        </button>
   

      </div>

      <div className='herotext'>
      <p>The [School Name] is a premier secondary school dedicated to providing a nurturing and stimulating environment for students to grow and excel. With a strong focus on academic excellence, character development, and community engagement, our school is committed to shaping the leaders of tomorrow.

Vision and Mission

Our vision is to empower students to become critical thinkers, compassionate individuals, and responsible global citizens. We achieve this through our mission of providing a comprehensive education that fosters intellectual curiosity, creativity, and a passion for lifelong learning.

Academic Excellence

At [School Name], we maintain high academic standards and offer a rigorous curriculum that prepares students for success in higher education and beyond. Our dedicated faculty members provide personalized support to help students achieve their full potential.

Holistic Development

We believe in nurturing the whole child, and our school promotes holistic development through a range of extracurricular activities, sports, arts, and character-building programs. We encourage students to explore their interests and develop a well-rounded skill set.

Faculty and Staff

Our faculty and staff are highly qualified, experienced, and passionate about education. They are committed to providing a safe and inclusive learning environment where every student is valued and supported.

Facilities and Resources

Our school boasts state-of-the-art facilities, including well-equipped classrooms, science laboratories, libraries, and sports facilities. We provide access to modern technology and resources to enhance the learning experience.

Extracurricular Activities

Students at [School Name] have the opportunity to participate in a wide range of extracurricular activities, clubs, and organizations, allowing them to pursue their interests and develop leadership skills.

Community Engagement

We believe in fostering a sense of social responsibility in our students. Through community service projects, outreach programs, and partnerships with local organizations, we encourage students to make a positive impact in their communities.

Admission Information

For admission inquiries, please contact our admissions office at [Contact Number] or visit our website for more information on the application process and admission requirements.

Contact Information

For general inquiries or to schedule a visit, please contact us at [Contact Number] or [Email Address]. Visit our website at [Website] for updates and announcements.</p>
    </div>

    {/* <div style={{ width: '100vw', height: '100vh' }}>
      <ImageSlider />
    </div> */}

      {/* <div>
      <TodoApp />
      </div> */}
      
    <Notification />

    

    <div className='beforeFooter'>
    <button className='image'>
      <img src={require("./images.jpg/award1.jpeg")}alt="logo" />
      <p>the winning team</p>
      </button>

      <button className='image'>
      <img src={require("./images.jpg/award1.jpeg")}alt="logo" />
      <p>the winning team</p>
      </button>

      <button className='image'>
      <img src={require("./images.jpg/award1.jpeg")}alt="logo" />
      <p>the winning team</p>
      </button>
    

    <button className='image'>
      <img src={require("./images.jpg/award1.jpeg")}alt="logo" />
      <p>the winning team</p>
      </button>
    </div>


      <footer className='footer'>
<h1>footer</h1>
      </footer>

      {/* <div>
      <h1>My Image Slider</h1>
      <ImageSlider />
    </div> */}
{/*       
      <SidebarWithTabs />
      
      <FullScreenButton />

      <div>
        {users.map((detail, index) => (
          <Link to={`/details/${users.map}`} key={index}>
            <div>
              <p>{detail.firstName}</p>
            </div>
          </Link>
        ))}
      </div>

      <div>
      <h1>this is the home page</h1> */}
 
      </div>
      // </div>
    
  );
}

export default HomePage_Admin;



