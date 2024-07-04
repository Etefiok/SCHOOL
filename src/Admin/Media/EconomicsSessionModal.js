import React from "react";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
// import "./ContactDetails.css"
import "../AlertMessages/GeneralAlert.css"

function EconomicsSessionModals({ show, onHide, content, updatedAt, title }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        {/* <Modal.Title className="MessageTitle" id="example-custom-modal-styling-title">
          Message Title:
          <Modal.Body>{title}</Modal.Body>
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        {content}
        <hr />
        <p>{moment(updatedAt).format("MMM, YY Y [at] h:mm A")}</p>
      </Modal.Body>
    </Modal>
  );
}

export default EconomicsSessionModals;
