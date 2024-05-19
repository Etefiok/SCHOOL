import React, { useState, useRef, useEffect } from 'react';
import { readFileAsync } from '../utils';
import axios from 'axios';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import "../Exams/Jss1Econs.css";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const TestBooks = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      title: '',
      lecturer: '',
      topic: '',
      content: EditorState.createEmpty(),
      video: null,
      video2: null,
      image: null,
      pdf: null,
      link: '',
    },
  ]);

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

  const handleLinkChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].link = value;
      return updatedQuestions;
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (currentQuestionIndex === questions.length - 1) {
      setQuestions((prevQuestions) => [...prevQuestions, { title: '', lecturer: '', topic: '', content: EditorState.createEmpty(), video: null, video2: null, image: null, pdf: null, link: '' }]);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handlePostQuestions = async () => {
   
  };

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

  const handleImageUpload = (index, file) => {
    if (file.type !== 'image/jpeg') {
      alert('Please upload a JPG image.');
      return;
    }
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].image = file;
      return updatedQuestions;
    });
  };

  const handlePdfUpload = (index, file) => {
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file.');
      return;
    }
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].pdf = file;
      return updatedQuestions;
    });
  };

  return (
    <div>
      <h4>Test Book</h4>
      <div>
        
        <Form>
          <div className='Title-container'>
          <div>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.title}
              onChange={(e) => handleTitleChange(currentQuestionIndex, e.target.value)}
            />
          </Form.Group>
          </div>

          <div>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.topic}
              onChange={(e) => handleTopicChange(currentQuestionIndex, e.target.value)}
            />            
          </Form.Group>
          </div>

          <div>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => handleImageUpload(currentQuestionIndex, e.target.files[0])}
            />
          </Form.Group>
          </div>

          <div>
          <Form.Group>
            <Form.Label>PDF</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => handlePdfUpload(currentQuestionIndex, e.target.files[0])}
            />
          </Form.Group>
          </div>

          <div>
          <Form.Group>
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.link}
              onChange={(e) => handleLinkChange(currentQuestionIndex, e.target.value)}
            />
          </Form.Group>
          </div>
          </div>
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
              
              <p>Author: {currentQuestion.topic}</p>
              </div>

              <div>
          {/* <h2>Image Preview</h2> */}
          {currentQuestion.image && (
            <img
              src={URL.createObjectURL(currentQuestion.image)}
              // alt="Question Image"
              style={{ maxWidth: '100%', width: '30%',
              height: 'auto' }}
            />
          )}
        </div>
        <div>
          {/* <h2>PDF Preview</h2> */}
          {currentQuestion.pdf && (
            <a href={URL.createObjectURL(currentQuestion.pdf)} target="_blank" rel="noreferrer">
              View PDF
            </a>
          )}
        </div>
        <div>
          {/* <h2>Link Preview</h2> */}
          {currentQuestion.link && (
            <a href={currentQuestion.link} target="_blank" rel="noreferrer">
              {currentQuestion.link}
            </a>
          )}
        </div>

            </div>
            <div className='Delete-Post'>
            <Button onClick={handlePostQuestions}>Post</Button>
            <Button onClick={() => handleDeleteQuestion(currentQuestionIndex)}>
              Delete
            </Button>
            </div>
          </div>
        </div>
      );
      
}

export default TestBooks
