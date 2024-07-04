import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import "./GeneralAlert.css"
import GeneralAlertModal from './GeneralAlertModal';

const GeneralAlert = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      title: '',
      topic: '',
      content: EditorState.createEmpty(),
    },
  ]);
  const [generalAlerts, setGeneralAlerts] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingAlert, setEditingAlert] = useState(null);
  const [showModal, setShowModal] = useState({});

  const [isSavingPost, setIsSavingPost] = useState(false);
  const [isSavingRepost, setIsSavingRepost] = useState(false);
  const [selectedAlertForRepost, setSelectedAlertForRepost] = useState(null);

  const handleTitleChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].title = value;
      return updatedQuestions;
    });
  };

  const handleTopicChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].topic = value;
      return updatedQuestions;
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (currentQuestionIndex === questions.length - 1) {
      setQuestions((prevQuestions) => [...prevQuestions, { title: '', topic: '', content: EditorState.createEmpty() }]);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const [isSaving, setIsSaving] = useState(false);
  const [expirationDate, setExpirationDate] = useState(null);

  const handlePostQuestion = async () => {
    if (isSavingPost) return; 
    setIsSavingPost(true);
    try {
      const response = await axios.post('http://localhost:5000/auth/general-alert', {
        topic: questions[currentQuestionIndex].topic,
        title: questions[currentQuestionIndex].title,
        content: draftToHtml(convertToRaw(questions[currentQuestionIndex].content.getCurrentContent())),
        expirationDate: expirationDate,
      });

      console.log('Question posted successfully:', response.data);

       // Reset the form fields
    setQuestions((prevQuestions) => [
      {
        title: '',
        topic: '',
        content: EditorState.createEmpty(),
      },
    ]);
    setCurrentQuestionIndex(0);
    setExpirationDate(null);

    } catch (error) {
      console.error('Error posting question:', error);
    } finally {
      setIsSavingPost(false);
    }
  };


  const [currentPage, setCurrentPage] = useState(1);
  // const [alertsPerPage] = useState(20);

  useEffect(() => {
    const fetchGeneralAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/general-alerts');
        setGeneralAlerts(response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      } catch (error) {
        console.error('Error fetching general alerts:', error);
      }
    };

    fetchGeneralAlerts();
  }, []);

  // const indexOfLastAlert = currentPage * alertsPerPage;
  // const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;
  // const currentAlerts = generalAlerts.slice(indexOfFirstAlert, indexOfLastAlert);

  // const handlePreviousPage = () => {
  //   setCurrentPage(currentPage - 1);
  // };

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  // };


  // useEffect(() => {
  //   const fetchGeneralAlerts = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/auth/general-alerts');
  //       const alertsWithEditorState = response.data.map((alert) => ({
  //         ...alert,
  //         content: EditorState.createWithContent(convertFromRaw(JSON.parse(alert.content))),
  //       }));
  //       setGeneralAlerts(alertsWithEditorState.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  //     } catch (error) {
  //       console.error('Error fetching general alerts:', error);
  //     }
  //   };
  
  //   fetchGeneralAlerts();
  // }, []);



  const currentQuestion = questions[currentQuestionIndex];

  const onEditorStateChange = (editorState) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[currentQuestionIndex].content = editorState;
      return updatedQuestions;
    });
  };

  const currentQuestionHtml = draftToHtml(convertToRaw(currentQuestion.content.getCurrentContent()));

  const handleDeleteQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(index, 1);
      return updatedQuestions;
    });
    if (currentQuestionIndex === index) {
      setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const handleDeleteAlert = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/auth/general-alerts/${id}`);
      setGeneralAlerts((prevAlerts) => prevAlerts.filter((alert) => alert._id !== id));
    } catch (error) {
      console.error('Error deleting general alert:', error);
    }
  };

  const handleRepostAlert = async () => {
    if (isSavingRepost || !selectedAlertForRepost) return; 
    setIsSavingRepost(true);
    try {
      const response = await axios.post('http://localhost:5000/auth/general-alert', {
        topic: selectedAlertForRepost.topic,
        title: selectedAlertForRepost.title,
        content: selectedAlertForRepost.content,
      });

      console.log('Alert reposted successfully:', response.data);
    } catch (error) {
      console.error('Error reposting general alert:', error);
    } finally {
      setIsSavingRepost(false);
      setSelectedAlertForRepost(null);
    }
  };

  const handleSelectAlertForRepost = (alert) => {
    setSelectedAlertForRepost(alert);
    setGeneralAlerts(prevAlerts => prevAlerts.map(a => a._id === alert._id ? { ...a, isRepostSelected: true } : { ...a, isRepostSelected: false }));
  };



  const handleEditAlert = (alert) => {
    try {
      const parsedContent = JSON.parse(alert.content);
      setEditingAlert(alert);
      setIsEditMode(true);
      setQuestions((prevQuestions) => [
        {
          title: alert.title,
          topic: alert.topic,
          content: EditorState.createWithContent(convertFromRaw(parsedContent)),
        },
      ]);
      setCurrentQuestionIndex(0);
    } catch (error) {
      console.error('Error parsing alert content:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };
  

  const handleUpdateAlert = async () => {
    try {
      await axios.put(`http://localhost:5000/auth/general-alerts/${editingAlert._id}`, {
        topic: questions[currentQuestionIndex].topic,
        title: questions[currentQuestionIndex].title,
        content: draftToHtml(convertToRaw(questions[currentQuestionIndex].content.getCurrentContent())),
        expirationDate: expirationDate,
      });
      setGeneralAlerts((prevAlerts) =>
        prevAlerts.map((alert) =>
          alert._id === editingAlert._id
            ? { ...alert, topic: questions[currentQuestionIndex].topic, title: questions[currentQuestionIndex].title, content: draftToHtml(convertToRaw(questions[currentQuestionIndex].content.getCurrentContent())),
            expirationDate: expirationDate,
             }
            : alert
        )
      );
      setIsEditMode(false);
      setEditingAlert(null);
      console.log('Alert updated successfully');
    } catch (error) {
      console.error('Error updating general alert:', error);
    }
  };

  const handleModalOpen = (index) => {
    setShowModal({ ...showModal, [index]: true });
  };

  const handleModalClose = (index) => {
    setShowModal({ ...showModal, [index]: false });
  };

  // const [IsButtonDisabled, setIsButtonDisabled] = useState(false);

  // const handleDisableButton = () => {
  //   setIsButtonDisabled(true);
  // }

  return (
    <div>
      <h1>General Alert</h1>
      <div>
        <Form>

        <Form.Group style={{width: "20%"}}>
          <Form.Label>Expiration Date</Form.Label>
          <Form.Control
            type="date"
            value={expirationDate ? moment(expirationDate).format('YYYY-MM-DD') : ''}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </Form.Group>

          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.title}
              onChange={(e) => handleTitleChange(currentQuestionIndex, e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>HEADING</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.topic}
              onChange={(e) => handleTopicChange(currentQuestionIndex, e.target.value)}
            />
          </Form.Group>

          <Editor
            placeholder="Description:"
            type="text"
            editorState={currentQuestion.content}
            onEditorStateChange={onEditorStateChange}
            toolbarClassName="toolbar-class"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbar={{
              options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
            }}
          />
        </Form>
      </div>
      <div className="All-Button">
        <Button onClick={handlePreviousQuestion}>Previous</Button>
        <Button onClick={handleNextQuestion}>Next</Button>
        <Button disabled={isSavingPost} onClick={handlePostQuestion}>Post</Button>
        
        {/* <Button disabled={isSavingRepost || !selectedAlertForRepost} onClick={handleRepostAlert}>
          Repost
        </Button> */}

      </div>

      <div className="Preview-Section">
        <div>
          <h2>Preview</h2>
          <div className="Correct-Answer">
            <p>Subject: {currentQuestion.title}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: currentQuestionHtml }} />
        </div>
        <div className="Delete-Post">
        <Button disabled={isSavingPost} onClick={handlePostQuestion}>Post</Button>
          <Button onClick={() => handleDeleteQuestion(currentQuestionIndex)}>
            Delete
          </Button>
        </div>
      </div>
      <hr />

      {/* details section */}
      
      <div className="Details-Section">
    {generalAlerts.map((alert, index) => (
      <div key={index} className="alert-card">
        <span className="Alert-Order">
          <p>{alert.title}</p>
        </span>
        <span className="Alert-Order">
          <p>{alert.topic}</p>
        </span>
        <span onClick={() => handleModalOpen(index)} className="Alert-content">
          <div dangerouslySetInnerHTML={{ __html: alert.content }} />
        </span>
        <span className="Alert-Order">
          {moment(alert.createdAt).format("MMM D, YYYY [at] h:mm A")}
        </span>
        
        <div className="Alert-actions">
          <Button variant="danger" onClick={() => handleDeleteAlert(alert._id)}>
            Delete
          </Button>
          <Form.Check
          style={{cursor:"zoom-out"}}
            type="checkbox"
            checked={alert.isRepostSelected}
            disabled={selectedAlertForRepost && selectedAlertForRepost._id !== alert._id}
            onChange={() => handleSelectAlertForRepost(alert)}
          />
          <Button disabled={isSavingRepost || !selectedAlertForRepost} onClick={handleRepostAlert}>
            Repost
          </Button>
          <Button variant="warning" onClick={() => handleEditAlert(alert)}>
            Edit
          </Button>
          <GeneralAlertModal
            show={showModal[index] || false}
            onHide={() => handleModalClose(index)}
            title={alert.title}
            content={alert.content}
            createdAt={alert.createdAt}
          />
        </div>
        <hr />
      </div>
    ))}
  </div>


      {isEditMode && (
        <div className="Edit-Mode">
          <h2>Edit Alert</h2>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={questions[currentQuestionIndex].title}
                onChange={(e) => handleTitleChange(currentQuestionIndex, e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>HEADING</Form.Label>
              <Form.Control
                type="text"
                value={questions[currentQuestionIndex].topic}
                onChange={(e) => handleTopicChange(currentQuestionIndex, e.target.value)}
              />
            </Form.Group>

            <Editor
              placeholder="Description:"
              type="text"
              editorState={questions[currentQuestionIndex].content}
              onEditorStateChange={onEditorStateChange}
              toolbarClassName="toolbar-class"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
              }}
            />

            <div className="Edit-Actions">
              <Button onClick={handleUpdateAlert}>Update</Button>
              <Button onClick={() => setIsEditMode(false)}>Cancel</Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};
export default GeneralAlert;