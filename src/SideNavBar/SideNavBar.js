//for side bar navigation
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


// for edtitor tools in textarea
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

// Navbar with search icon outside
import { FaSearch } from 'react-icons/fa';





function SideNavBar() {

   //for side bar navigation 
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value.toLowerCase())
          )}
        </ul>
      </div>
    )
  );

// for edtitor tools in textarea
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];



// Navbar with search icon outside
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    //for side bar navigation 
    // <>
    //   <Button variant="primary" onClick={handleShow}>
    //     +
    //   </Button>

    //   <Offcanvas show={show} onHide={handleClose}>
    //     <Offcanvas.Header closeButton>
    //       <Offcanvas.Title>Offcanvas</Offcanvas.Title>
    //     </Offcanvas.Header>
    //     <Offcanvas.Body>
    //       <Dropdown>
    //         <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
    //           Custom toggle
    //         </Dropdown.Toggle>

    //         <Dropdown.Menu as={CustomMenu}>
    //           <Dropdown.Item eventKey="1">Red</Dropdown.Item>
    //           <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
    //           <Dropdown.Item eventKey="3" active>Orange
                
    //           </Dropdown.Item>
    //           <Dropdown.Item eventKey="4">Red-Orange</Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>
    //     </Offcanvas.Body>
    //   </Offcanvas>
    // </>


// for edtitor tools in textarea

<div>
      <h2>Editor Tools Box</h2>
      <ReactQuill 
        theme="snow"
        value={editorHtml}
        onChange={setEditorHtml}
        modules={modules}
        formats={formats}
      />
      
    </div>

    


  );
}

export default SideNavBar;
