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

  const handlePostQuestions = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/general-alert', {
        topic: questions[currentQuestionIndex].topic,
        title: questions[currentQuestionIndex].title,
        content: draftToHtml(convertToRaw(questions[currentQuestionIndex].content.getCurrentContent())),
      });

      console.log('Questions posted successfully:', response.data);
      // Reset the questions state or perform any other necessary actions
    } catch (error) {
      console.error('Error posting questions:', error);
    }
  };

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

  const handleRepostAlert = async (alert) => {
    try {
      await axios.post('http://localhost:5000/auth/general-alert', {
        topic: alert.topic,
        title: alert.title,
        content: alert.content,
      });
      console.log('Alert reposted successfully');
    } catch (error) {
      console.error('Error reposting general alert:', error);
    }
  };


  const handleEditAlert = (alert) => {
    setEditingAlert(alert);
    setIsEditMode(true);
    setQuestions((prevQuestions) => [
      {
        title: alert.title,
        topic: alert.topic,
        content: EditorState.createWithContent(convertFromRaw(JSON.parse(alert.content))),
      },
    ]);
    setCurrentQuestionIndex(0);
  };

  const handleUpdateAlert = async () => {
    try {
      await axios.put(`http://localhost:5000/auth/general-alerts/${editingAlert._id}`, {
        topic: questions[currentQuestionIndex].topic,
        title: questions[currentQuestionIndex].title,
        content: draftToHtml(convertToRaw(questions[currentQuestionIndex].content.getCurrentContent())),
      });
      setGeneralAlerts((prevAlerts) =>
        prevAlerts.map((alert) =>
          alert._id === editingAlert._id
            ? { ...alert, topic: questions[currentQuestionIndex].topic, title: questions[currentQuestionIndex].title, content: draftToHtml(convertToRaw(questions[currentQuestionIndex].content.getCurrentContent())) }
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

  return (
    <div>
      <h1>General Alert</h1>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
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
        <Button onClick={handlePostQuestions}>Post</Button>
      </div>
      <div className="Preview-Section">
        <div>
          <h2>Preview</h2>
          <div className="Correct-Answer">
            <p>Title: {currentQuestion.title}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: currentQuestionHtml }} />
        </div>
        <div className="Delete-Post">
          <Button onClick={handlePostQuestions}>Post</Button>
          <Button onClick={() => handleDeleteQuestion(currentQuestionIndex)}>
            Delete
          </Button>
        </div>
      </div>
      <hr />
      <div className="Details-Section">
        {generalAlerts.map((alert, index) => (
          <div key={index} className="alert-card">
            <span className='Alert-Order'>
              <p>{alert.title}</p>
            </span>
            <span className='Alert-Order'>
              <p>{alert.topic}</p>
            </span>
            <button onClick={() => handleModalOpen(index)} className='Alert-content'>
            {/* <span> */}
              <div dangerouslySetInnerHTML={{ __html: alert.content }} />
              {/* <div dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(alert.content.getCurrentContent())) }} /> */}
            {/* </span> */}
            </button>
            <span className='Alert-Order'>
              {moment(alert.createdAt).format("MMM D, YYYY [at] h:mm A")}
            </span>
            <div className="Alert-actions">
              <Button variant="danger" onClick={() => handleDeleteAlert(alert._id)}>
                Delete
              </Button>
              <Button variant="primary" onClick={() => handleRepostAlert(alert)}>
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
