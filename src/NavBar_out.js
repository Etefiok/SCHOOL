import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
// import Loginforparent from './Loginforparent'




const NavBar_out = () => {

  const [showNotice, setShowNotice] = useState(false);
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

          <Nav>

<div className='menu'>
            <Nav.Link className='Animation1' id="navbarScrollingDropdown" onClick={() => { window.location.href = "./"; }}>Home</Nav.Link>

            <NavDropdown className='Animation2' title="Academics" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => { window.location.href = "./AdmissionForm"; }}>Admission Form</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { window.location.href = "./circular";}}>Circular</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Activities</NavDropdown.Item>
              <NavDropdown.Item href="#action5" onClick={() => { window.location.href = "./applicationform";}}>Application Form</NavDropdown.Item>
              <NavDropdown.Item className='school_Calender' onClick={() => { window.location.href = "./School_Calendar_Page";}}>School Calender</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { window.location.href = "./Galary";}}>Galary</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { window.location.href = "./ContactForm";}}>Contact Us</NavDropdown.Item>
            </NavDropdown>
        
            <NavDropdown className='Animation3' 
            title="Parent Portal" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = "./Loginforparent"; }}>Login</NavDropdown.Item>
          </NavDropdown>

        <NavDropdown className='Animation4' title="Student Portal" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = "./Login_Student"; }}>Login/Signup</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className='Animation6' title="Admin Portal" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = "./Login_Admin"; }}>Login/Signup</NavDropdown.Item>
        </NavDropdown>
 
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
          </div>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  
    
  );
}

export default NavBar_out;