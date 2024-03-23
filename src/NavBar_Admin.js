import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
// import Loginforparent from './Loginforparent'




const NavBar_Admin = () => {

  const [showNotice, setShowNotice] = useState(false);
  const handleItemClick = (path) => {
    window.location.href = path;
  };
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
          <Nav>

<div className='manue'>
            <Nav.Link onClick={() => { window.location.href = "./Homepage_Student"; }}>Home</Nav.Link>
            {/* <Nav.Link onClick={() => { window.location.href = "./loginforpage"; }}>Login</Nav.Link> */}


            <NavDropdown title="Academics" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = "./AdmissionForm"; }}>Admission Form</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Class"; }}>Exams</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Performance";}}>Performance</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./circular";}}>Circular</NavDropdown.Item>
            

            <NavDropdown.Divider />
            <NavDropdown title="session">
           <div>
            <NavDropdown.Item onClick={() => { window.location.href = "./Jss1session"; }}>JSS1</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Jss2session";}}>JSS2</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Jss3session";}}>JSS3</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Sss1session"; }}>SSS1</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Sss2session";}}>SSS2</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "./Sss3session";}}>SSS3</NavDropdown.Item>
            </div>
            </NavDropdown>
            


              
            <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Activities</NavDropdown.Item>
              <NavDropdown.Item href="#action5" onClick={() => { window.location.href = "./applicationform";}}>Application Form</NavDropdown.Item>
              <NavDropdown.Item onClick={() => { window.location.href = "./ContactForm";}}>Contact Us</NavDropdown.Item>
            </NavDropdown>
        
            <NavDropdown 
            title="Parent Portal" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => { window.location.href = "./Loginforparent"; }}>Login</NavDropdown.Item>
            <NavDropdown.Item onClick={() => { window.location.href = "";}}>Academic Calender</NavDropdown.Item>
          </NavDropdown>

        <NavDropdown title="Student Portal" id="navbarScrollingDropdown">
            <NavDropdown title="Senior Class">
            <NavDropdown.Item onClick={() => { window.location.href = "./ss1profilemap"; }}>SS1</NavDropdown.Item>
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
              <NavDropdown.Item href="#action5" onClick={() => { window.location.href = "./ChartRoom"; }}>Chart Room</NavDropdown.Item>
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

export default NavBar_Admin;