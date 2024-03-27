import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Exams from './Exams';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Performance from './Performance';
import LoginForExams from './LoginForExams';
import { useState } from 'react';
// import Loginforparent from './Loginforparent'




const Navba = () => {

  const [showNotice, setShowNotice] = useState(false);
    // const Navigate = useNavigate();

    // function loginuser(){
    //     Navigate("./LoginForExams")
    // };


  return (
    <div className='Navbar'>
    {/* <img src={require("./images.jpg/schoollogo.jpeg")}alt="logo" /> */}
    <Navbar expand="lg" className="bg-body-tertiary " >
    
      <Container fluid >
      <div>
              <img src={require("./images.jpg/schoollogo.jpeg")}alt="logo" />
          </div>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
{/* <div className='manue'> */}
          <Nav

            className=""
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

<div className='manue'>
            <Nav.Link onClick={() => { window.location.href = "./"; }}>Home</Nav.Link>
            {/* <Nav.Link onClick={() => { window.location.href = "./loginforpage"; }}>Login</Nav.Link> */}


            <NavDropdown 
            title="Academics" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = ""; }}>Admission Form</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./LoginForExams"; }}>Exams</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Performance";}}>Performance</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./circular";}}>Circular</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./session";}}>Session</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./ContactForm";}}>Contact Us</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./ContactForm";}}>Galary</NavDropdown.Item>
              
              
            <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Activities
              </NavDropdown.Item>
          </NavDropdown>
        
            <NavDropdown 
            title="Parent Portal" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = "./Loginforparent"; }}>Login</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "";}}>Academic Calender</NavDropdown.Item>
          </NavDropdown>

        <NavDropdown title="Student Portal" id="navbarScrollingDropdown">
            <NavDropdown title="Senior Class">
            <NavDropdown.Item onClick={() => { window.location.href = "./Loginforss1"; }}>SS1</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./LoginForExams"; }}>SS2</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./LoginForExams"; }}>SS3</NavDropdown.Item>
       
       
            
          
       
        </NavDropdown>

          <NavDropdown title="Junior Class">
            <NavDropdown.Item onClick={() => { window.location.href = "./LoginForExams"; }}>JS1</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./LoginForExams"; }}>JS2</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./LoginForExams"; }}>JS3</NavDropdown.Item>
      
          </NavDropdown>

          <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" onClick={() => { window.location.href = "./Login2"; }}>Profile</NavDropdown.Item>
        </NavDropdown>

        {/* <NavDropdown 
            title="Admission" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = ""; }}>Admission Form</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./loginforpage";}}>Admission Status</NavDropdown.Item>
          </NavDropdown> */}

</div>
</Nav>
         
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
    
  );
}

export default Navba;