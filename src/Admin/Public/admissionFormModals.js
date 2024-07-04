import React from "react";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import "./AdmissionFormList.css";
import { Button } from "react-bootstrap";

function AdmissionFormModals({ show, form, onHide, createdAt }) {
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
                <img
                  src={`http://localhost:5000/uploads/${form.passportImage}`}
                  alt="Passport"
                  width="200"
                  height="250"
                />
              </div>
            </div>
          )}
          <div className="TextContainer">
            {form && form.fullName && <p>Name: {form.fullName}</p>}
            Mother name: {form.motherName} <br />
            DoB: {form.dob} <br />
            Address: {form.residentialAddress} <br />
            Email Address:{" "}
            <a
              href={`mailto:${form.email}`}
              onClick={() => handleEmailClick(form.email)}
            >
              {form.email}
            </a>
            <br />
            Mother tongue: {form.motherTongue} <br />
            Religion: {form.religion} <br />
            Place Of Birth: {form.placeOfBirth} <br />
            City: {form.city} <br />
            District: {form.district} <br />
            State: {form.state} <br />
            Last School Attended: {form.lastSchoolAttended} <br />
            Class: {form.className} <br />
            Admission Standard: {form.admissionStandard} <br />
            Disability: {form.disability ? "Yes" : "No"} <br />
            Blood Group: {form.bloodGroup} <br />
            Identification Mark: {form.identificationMark} <br />
          </div>
        </div>
        {form.birthCertificate && (
          <div className="form-row">
            <div className="form-field">
              <img
                src={`http://localhost:5000/uploads/${form.birthCertificate}`}
                alt="Birth Certificate"
                width="200"
                height="250"
              />
            </div>
          </div>
        )}
        Text: {form.message} <br />
        <p>Posted: {moment(createdAt).format("MMM D, YYYY [at] h:mm A")}</p>
      </Modal.Body>
    </Modal>
  );
}

export default AdmissionFormModals;
