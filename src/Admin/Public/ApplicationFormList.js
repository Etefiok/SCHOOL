import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './ContactDetails.css';
import ApplicationFormListModals from './applicationFormListModals';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const ApplicationFormList = () => {
  const [applicationForms, setApplicationForms] = useState([]);
  const [showModal, setShowModal] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(40);
  const recordsPerPage = 5;

  useEffect(() => {
    const fetchApplicationForms = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/auth/application-forms?page=${currentPage}&limit=${recordsPerPage}`);
        setApplicationForms(response.data);
      } catch (error) {
        console.error('Error fetching application forms:', error);
      }
    };
    fetchApplicationForms();
  }, [currentPage]);

  const handleModalOpen = (index) => {
    setShowModal({ ...showModal, [index]: true });
  };

  const handleModalClose = (index) => {
    setShowModal({ ...showModal, [index]: false });
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="Contact-Container">
      <h2>Application Forms</h2>
      <hr />
      {applicationForms && applicationForms.length > 0 ? (
        <div>
          {applicationForms.map((form, index) => (
            <div className="ContactDetails" key={index}>
              {index >= (currentPage - 1) * recordsPerPage && index < currentPage * recordsPerPage && (
                <>
                  <p className="details-rows">
                    <span className="contact-fullname">
                      Name: {form.fullName}
                    </span>
                    &nbsp;
                    <span className="contact-fullname">
                      <a href={`mailto:${form.emailAddress}`} onClick={() => handleEmailClick(form.emailAddress)}>
                        {form.emailAddress}
                      </a>
                    </span>
                    &nbsp;
                    <span className="contact-fullname">
                      Position: {form.position}
                    </span>
                    &nbsp;
                    <span onClick={() => handleModalOpen(index)} className="contact-fullname">
                      Objective: {form.message}
                    </span>
                    <div style={{ marginTop: '5px' }}>
                      <Button
                        style={{ padding: '0px', marginTop: '0px' }}
                        onClick={(e) => {
                          e.preventDefault('');
                          downloadResume(form.resume);
                        }}
                      >
                        Resume
                      </Button>
                    </div>
                    <span className="contact-fullname">
                      Submitted: {new Date(form.createdAt).toLocaleString()}
                    </span>
                    &nbsp;
                  </p>
                  <ApplicationFormListModals
                    show={showModal[index] || false}
                    onHide={() => handleModalClose(index)}
                    fullName={form.fullName}
                    resume={form.resume}
                    form={form}
                    createdAt={form.createdAt}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading ...</p>
      )}

      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={prePage}>
              Prev
            </button>
          </li>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => changeCPage(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
          {totalPages > 5 && (
            <li className="page-item disabled">
              <button className="page-link">...</button>
            </li>
          )}
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
        <div>Total Pages: {totalPages}</div>
      </nav>
    </div>
  );
};

export default ApplicationFormList;
