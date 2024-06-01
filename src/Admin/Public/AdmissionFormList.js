// AdmissionFormList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ContactDetails.css";
import moment from "moment";
import AdmissionFormModals from "./admissionFormModals";
import { Button } from "react-bootstrap";

const AdmissionFormList = () => {
  const [admissionForms, setAdmissionForms] = useState([]);
  const [showModal, setShowModal] = useState({});

  useEffect(() => {
    const fetchAdmissionForms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/auth/admission-forms"
        );

        const sortedForms = response.data.sort((a, b) =>
          moment(b.createdAt).diff(moment(a.createdAt))
        );
        setAdmissionForms(sortedForms);
        // setAdmissionForms(response.data);
      } catch (error) {
        console.error("Error fetching admission forms:", error);
      }
    };

    fetchAdmissionForms();
  }, []);

  const handleModalOpen = (index) => {
    setShowModal({ ...showModal, [index]: true });
  };

  const handleModalClose = (index) => {
    setShowModal({ ...showModal, [index]: false });
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="Contact-Container">
      <h1>Admission List</h1>
      <hr />

      {admissionForms.length > 0 ? (
        <div>
          {admissionForms.map((form, index) => (
            <div className="ContactDetails" key={index}>
              <p>
                <Button style={{backgroundColor:"white", color:"black"}} className="details-rows"
                
                  onClick={() => handleModalOpen(index)}
                >
                  <span className="contact-fullname">
                  {form.fullName} 
                  </span>
                  &nbsp; 
                  <span className="contact-fullname">
                  {/* Email Address:  */}
                  {""}
                  <a
                    href={`mailto:${form.email}`}
                    onClick={() => handleEmailClick(form.email)}
                  >
                    {form.email}
                  </a>
                  </span>
                  {/* &nbsp;
                  {form.fullName} */}
                  &nbsp;
                  <span className="contact-fullname">
                  {form.message}
                  </span>
                  <span className="contact-fullname">
                  {moment(form.createdAt).format("MMM D, YYYY [at] h:mm A")}
                </span>
                </Button>
                <AdmissionFormModals
                  show={showModal[index] || false}
                  onHide={() => handleModalClose(index)}
                  fullName={form.fullName}
                  passportImage={form.passportImage}
                  form={form}
                  createdAt={form.createdAt}
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
};

export default AdmissionFormList;
