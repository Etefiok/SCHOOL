// AdmissionFormModals.js
import React from "react";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
// import "./ContactDetails.css";
import "./AdmissionFormList.css"
import { Button } from "react-bootstrap";

function AdmissionFormModals({
  fullName,
  passportImage,
  show,
  form,
  onHide,
  createdAt,
}) {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };


  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="MessageTitle"
          id="example-custom-modal-styling-title"
        >
          Admission Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="detailsContainer">
        {form && form.passportImage && (
          <div className="form-row">
            <div className="form-field">
              {/* <h3>Passport Image</h3> */}
              <img
                src={`http://localhost:5000/uploads/${form.passportImage}`}
                alt="Passport"
              />
            </div>
          </div>
        )}
        <div className="TextContainer">
        {form && form.fullName && <p>Name: {form.fullName}</p>}
        Mother name: {form.motherName} <br></br>
        DoB: {form.dob} <br></br>
        Address: {form.residentialAddress} <br></br>
        Email Address: {""}
        <a
          href={`mailto:${form.email}`}
          onClick={() => handleEmailClick(form.email)}
        >
          {form.email}
        </a>
        <br></br>
        Mother tongue: {form.motherTongue} <br></br>
        Reacteligion: {form.religion} <br></br>
        Place Of Birth: {form.placeOfBirth} <br></br>
        City: {form.city} <br></br>
        District: {form.district} <br></br>
        State: {form.state} <br></br>
        Last School Attended: {form.lastSchoolAttended} <br></br>
        Class: {form.className} <br></br>
        Admission Standard: {form.admissionStandard} <br></br>
        disability: {form.disability} <br></br>
        BarloodGroup: {form.bloodGroup} <br></br>
        Identification Mark: {form.identificationMark} <br></br>
        </div>
        </div>
        {form.birthCertificate && (
          <div className="form-row">
            <div className="form-field">
              <img
                src={`http://localhost:5000/uploads/${form.birthCertificate}`}
                alt="Birth Certificate"
              />
            </div>
          </div>
        )}
        Text: {form.message} <br></br>
        <p>Posted: {moment(createdAt).format("MMM D, YYYY [at] h:mm A")}</p>
      {/* <Button onClick={handlePrintClick}>Print</Button> */}
      </Modal.Body>
      
    </Modal>
  );
}

export default AdmissionFormModals;
