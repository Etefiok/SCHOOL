import React, { useState, useRef, useEffect } from 'react';
import { readFileAsync } from '../utils';
import axios from 'axios';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "../Exams/Jss1Econs.css";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import { saveQuestions, getQuestions } from './api';

const SSS3Alert = () => {
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
    },
  ]);

  const handleTitleChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].title = value;
      return updatedQuestions;
    });
  };

//   const handleLecturerChange = (index, value) => {
//     setQuestions((prevQuestions) => {
//       const updatedQuestions = [...prevQuestions];
//       updatedQuestions[index].lecturer = value;
//       return updatedQuestions;
//     });
//   };

  const handleTopicChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].topic = value;
      return updatedQuestions;
    });
  };

  const handleVideoChange = (index, file) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].video = URL.createObjectURL(file);
      return updatedQuestions;
    });
  };

//   const handleVideoChange2 = (index, file) => {
//     setQuestions((prevQuestions) => {
//       const updatedQuestions = [...prevQuestions];
//       updatedQuestions[index].video2 = URL.createObjectURL(file);
//       return updatedQuestions;
//     });
//   };

  const handleImageChange = async (index, file) => {
    if (file) {
      try {
        const imageData = await readFileAsync(file);
        setQuestions((prevQuestions) => {
          const updatedQuestions = [...prevQuestions];
          updatedQuestions[index].image = imageData;
          return updatedQuestions;
        });
      } catch (error) {
        console.error('Error loading image:', error);
      }
    } else {
      setQuestions((prevQuestions) => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[index].image = null;
        return updatedQuestions;
      });
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (currentQuestionIndex === questions.length - 1) {
      setQuestions((prevQuestions) => [...prevQuestions, { title: '', lecturer: '', topic: '', content: EditorState.createEmpty(), video: null, video2: null, image: null }]);
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
  return (
    <div>
      <h1>SSS3 Alert</h1>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.title}
              onChange={(e) => handleTitleChange(currentQuestionIndex, e.target.value)}
            />
          {/* </Form.Group>
          <Form.Group>
            <Form.Label>Lecturer</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.lecturer}
              onChange={(e) => handleLecturerChange(currentQuestionIndex, e.target.value)}
            /> */}
          </Form.Group>
          <Form.Group>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              type="text"
              value={currentQuestion.topic}
              onChange={(e) => handleTopicChange(currentQuestionIndex, e.target.value)}
            />            
          </Form.Group>
          <div className='VideoContainer'>
            <div className='Video-Image'>
                <Form.Group>
                    <Form.Label>Video</Form.Label>
                    <Form.Control
                    type="file"
                    accept="video/*"
                    onChange={(e) => handleVideoChange(currentQuestionIndex, e.target.files[0])}
                    />
                </Form.Group>
            </div>

            <div className='Video-Image'>
                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(currentQuestionIndex, e.target.files[0])}
                    />
                </Form.Group>
            </div>
          </div>
          <Editor
            placeholder="Description:"
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
                {/* <p>Lecturer: {currentQuestion.lecturer}</p> */}
              </div>
              {currentQuestion.video && (
                <div>
                  <h3>Video 1:</h3>
                  <video src={currentQuestion.video} controls style={{ maxWidth: '40%', width: '100%',
        height: 'auto'}} />
                </div>
              )}
              {/* {currentQuestion.video2 && (
                <div>
                  <h3>Video 2:</h3>
                  <video src={currentQuestion.video2} controls style={{ maxWidth: '100%' }} />
                </div>
              )} */}
              {currentQuestion.image && (
                <div>
                  <h3>Image:</h3>
                  <img src={currentQuestion.image} alt="Quiz" style={{ maxWidth: '40%', width: '100%',
        height: 'auto'}} />
                </div>
              )}
              <div dangerouslySetInnerHTML={{ __html: currentQuestionHtml }} />
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

export default SSS3Alert