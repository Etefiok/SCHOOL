import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactDetails.css";
import moment from "moment";
import ContactDetailsModal from "./ContactDetailsModal";
import { Button } from "react-bootstrap";

function ContactUsMessage() {
  const [contactDetails, setContactDetails] = useState([]);
  const [showModal, setShowModal] = useState({});

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/auth/ContactUs"
        );
        if (response.status) {
          // Reverse the order of the contact details
          setContactDetails(response.data);
        }
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContactDetails();
  }, []);

  const handleEmailClick = (emailAddress) => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleModalOpen = (index) => {
    setShowModal({ ...showModal, [index]: true });
  };

  const handleModalClose = (index) => {
    setShowModal({ ...showModal, [index]: false });
  };

  return (
    <div className="Contact-Container">
      <h4>Contact Details</h4>
      <hr />
      {contactDetails.length > 0 ? (
        <div>
          {contactDetails.map((contact, index) => (
            <div className="ContactDetails" key={index}>
              <p>
                <Button style={{backgroundColor:"white", color:"black"}} className="details-rows"
                  onClick={() => handleModalOpen(index)}
                >
                  <span className="contact-fullname">
                  {contact.fullName} 
                  </span>
                  &nbsp; 
                  <span className="contact-fullname">
                  {/* Email Address: */}
                  {" "}
                  <a
                    href={`mailto:${contact.emailAddress}`}
                    onClick={() => handleEmailClick(contact.emailAddress)}
                  >
                    {contact.emailAddress}
                  </a>
                  </span>
                  &nbsp;
                  <span className="contact-fullname">
                  {contact.title}
                  </span>
                  &nbsp;
                  <span className="contact-fullname">
                  {contact.message}
                  </span>                  
                  &nbsp;
                  <span className="contact-fullname">
                  {moment(contact.createdAt).format("MMM D, YYYY [at] h:mm A")}
                  </span>
                </Button>

                <ContactDetailsModal
                  show={showModal[index] || false}
                  onHide={() => handleModalClose(index)}
                  title={contact.title}
                  message={contact.message}
                  createdAt={contact.createdAt}
                />
              </p>
              {/* <hr /> */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ContactUsMessage;
