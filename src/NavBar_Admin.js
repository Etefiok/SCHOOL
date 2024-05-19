import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import TodayIcon from '@mui/icons-material/Today';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import { FaCog } from 'react-icons/fa';
import Ss1profileData from './Ss1profileData';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTv, faBloggerB } from '@fortawesome/free-brands-svg-icons';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


// import Loginforparent from './Loginforparent'




const NavBar_Student = () => {

  const Students = Ss1profileData[0];
  const [showNotice, setShowNotice] = useState(false);
  const [show, setShow] = useState(false);

  function toggleText(){
    setShow(!show)
  };


  const handleItemClick = (path) => {
    window.location.href = path;
  };


const handleSearch = () =>{
    console.log('Performing Search...')
};

  return (
    <div className='Navbar'>
    {/* <img src={require("./images.jpg/schoollogo.jpeg")}alt="logo" /> */}
    <Navbar expand="lg" className="" >
    
      <Container fluid >
      <div>
              <img src={require("./images.jpg/schoollogo.jpeg")}alt="logo" />
          </div>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
{/* <div className='manue'> */}
          <Nav>

<div className='menu'>  
            <Nav.Link className='Animation1' id="navbarScrollingDropdown" onClick={() => { window.location.href = "./Homepage_Admin"; }}>Home</Nav.Link>

            <NavDropdown className='Animation2' title="Academics" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = "./ClassesForExams"; }}><DescriptionIcon />Exams</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Classes"; }}><DescriptionIcon />Learning</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Performance";}}><EmojiEventsIcon />Performance</NavDropdown.Item>
        
         
 
            <NavDropdown title={<span><VideoLibraryIcon /> session</span>}>
                <div>
                    <NavDropdown.Item onClick={() => { window.location.href = "./Jss1session"; }}>JSS1</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "./Jss2session";}}>JSS2</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "./Jss3session";}}>JSS3</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "./Sss1session"; }}>SSS1</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "./Sss2session";}}>SSS2</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "./Sss3session";}}>SSS3</NavDropdown.Item>
                </div>
            </NavDropdown>  
          

            <NavDropdown title={<span><VideoLibraryIcon /> Students Profile</span>}>
                <div>
                    <NavDropdown.Item onClick={() => { window.location.href = ""; }}>JSS1</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "";}}>JSS2</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "";}}>JSS3</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "./Ss1profilemap"; }}>SSS1</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "";}}>SSS2</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { window.location.href = "";}}>SSS3</NavDropdown.Item>
                </div>
            </NavDropdown>  
       

              <NavDropdown.Item href="Activities"><DirectionsRunIcon />Activities</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { window.location.href = "./ContactForm";}}><ContactMailIcon /> Contact Us</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { window.location.href = "./Library";}}><LibraryBooksIcon />Library</NavDropdown.Item>
            </NavDropdown>
        
            {/* <NavDropdown className='Animation3' 
            title="Parent Portal" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = "./Loginforparent"; }}><LoginIcon /> Login</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./School_Calendar_Page";}}><TodayIcon /> Academic Calender</NavDropdown.Item>
          </NavDropdown> */}

        {/* <NavDropdown className='Animation4' title="Student Portal" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5" onClick={() => { window.location.href = "./ChatRoom"; }}><ChatIcon /> Chat Room</NavDropdown.Item>
        </NavDropdown> */}

        
        {/* <div> */}
      {/* <li>
        <a href="#">
          <FontAwesomeIcon icon={faTv} id="icons" />
          SERVICES
        </a>
        <div className="sub_menu1">
          <ul>
            <li><a href="#">Web Design</a></li>
            <li className="hover_me">
              <a href="#">
                Marketing
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
              <div className="sub_menu2">
                <ul>
                  <li><a href="#">SEO</a></li>
                  <li><a href="#">Social Media</a></li>
                  <li><a href="#">Youtube</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Trading</a></li>
            <li className="hover_me">
              <a href="#">
                Mobile App
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
              <div className="sub_menu2">
                <ul>
                  <li><a href="#">Android App</a></li>
                  <li><a href="#">IOS App</a></li>
                  <li><a href="#">Ionic App</a></li>
                  <li><a href="#">Flutter App</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faBloggerB} id="icons" />
        </a>
      </li>
    </div> */}


{/* This is the profile for media query */}
                <NavDropdown className='Animation5' title={Students.name} id="navbarScrollingDropdown">
                <img src={Students.image} alt="Passport Preview"  style={{ maxWidth: '40%', maxHeight: '100%', borderRadius: '50px' }}  />
                <p>{Students.StudentStatus}</p>
                <NavDropdown.Item onClick={() => { window.location.href = "./AbdullahiShehu"; }}><AccountCircleIcon />Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { window.location.href = "./Performance";}}><EmojiEventsIcon />Performance</NavDropdown.Item>

           

                <NavDropdown.Item onClick={() => { window.location.href = "";}}><FaCog /> Settings</NavDropdown.Item>

            

                <NavDropdown.Item href="#action5" onClick={() => { window.location.href = "./ "; }}><LogoutIcon /> Logout</NavDropdown.Item>

                </NavDropdown>
{/* profile for media query ends here */}   



 </div>
</Nav>
         
      <div className='flex'>
          <Form className="flexx" onSubmit={(e) => 
            {e.preventDefault(); handleSearch();}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

                

            <Button variant="outline-success" onClick={(e) => 
            {e.preventDefault(); handleSearch();}}>Search</Button>
          </Form>

            <div className='profilepics'>                
                <p><NavDropdown title={Students.name} id="">
                <img src={Students.image} alt="Passport Preview"  style={{ maxWidth: '40%', maxHeight: '100%', borderRadius: '50px' }}  />
                <p>{Students.StudentStatus}</p>
                <NavDropdown.Item onClick={() => { window.location.href = "./AbdullahiShehu"; }}><AccountCircleIcon />Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { window.location.href = "./Performance";}}><EmojiEventsIcon />Performance</NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item onClick={() => { window.location.href = "";}}><FaCog /> Settings</NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action5" onClick={() => { window.location.href = "./ "; }}><LogoutIcon /> Logout</NavDropdown.Item>

                </NavDropdown></p>
            </div>
          </div>    



            
            
         

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
    
  );
}

export default NavBar_Student;