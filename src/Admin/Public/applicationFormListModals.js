import React from "react";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import "./AdmissionFormList.css";
import { Button } from "react-bootstrap";
import axios from "axios";

function ApplicationFormListModals({ show, form, onHide, createdAt }) {
  const handleEmailClick = (emailAddress) => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const downloadResume = async (resumeUrl) => {
    try {
      const response = await axios.get(`http://localhost:5000/auth/uploads/${resumeUrl}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', resumeUrl);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
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
          Application Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <div>
    <p>Name: {form.fullName}</p>
    <p>
      Email Address:{" "}
      <a
        href={`mailto:${form.emailAddress}`}
        onClick={() => handleEmailClick(form.emailAddress)}
      >
        {form.emailAddress}
      </a> <br></br>
      <Button
                    style={{ padding: '0px', marginTop: '0px' }}
                    onClick={(e) => {
                      e.preventDefault('');
                      downloadResume(form.resume);
                    }}
                  >
                    Resume
                  </Button>
    </p>
    <p>Objective: {form.message}</p>
    <p>Posted: {moment(createdAt).format("MMM D, YYYY [at] h:mm A")}</p>
  </div>
</Modal.Body>

    </Modal>
  );
}

export default ApplicationFormListModals;
