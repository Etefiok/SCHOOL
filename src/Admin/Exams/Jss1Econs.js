import React, { useState, useRef, useEffect } from 'react';
import { readFileAsync } from '../utils';
import axios from 'axios';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "./Jss1Econs.css";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import { saveQuestions, getQuestions, deleteQuestion } from './api';

const Jss1Econs = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: EditorState.createEmpty(),
      instructions: '', // Add instructions field
      options: {
        A: '',
        B: '',
        C: '',
        D: '',
        E: '',
      },
      correctAnswer: 'A',
      image: null,
      answerType: 'options',
    },
  ]);

  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const handleTextareaInput = () => {
      const inputText = textareaRef.current.value;
      const suggestions = getAutoCompleteSuggestions(inputText);
      setAutoCompleteOptions(suggestions);
    };

    if (textareaRef.current) {
      textareaRef.current.addEventListener('input', handleTextareaInput);
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener('input', handleTextareaInput);
      }
    };
  }, []);

  const getAutoCompleteSuggestions = (inputText) => {
    // Implement your logic to generate auto-complete suggestions based on the input text
    // For example, you can use a library like Fuse.js to perform fuzzy string matching
    // or maintain a list of predefined suggestions in your application state
    const suggestions = ['Suggestion 1', 'Suggestion 2', 'Suggestion 3'];
    return suggestions.filter((option) =>
      option.toLowerCase().startsWith(inputText.toLowerCase())
    );
  };

  const selectAutoCompleteOption = (option) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[currentQuestionIndex].writtenAnswer = option;
      return updatedQuestions;
    });
  };


  const handleQuestionChange = (index, editorState) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].question = editorState;
      return updatedQuestions;
    });
  };

  const handleOptionChange = (questionIndex, option, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options[option] = value;
      return updatedQuestions;
    });
  };

  const handleCorrectAnswerChange = (questionIndex, answer) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].correctAnswer = answer;
      return updatedQuestions;
    });
  };

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
      setQuestions((prevQuestions) => [...prevQuestions, { question: EditorState.createEmpty(), options: { A: '', B: '', C: '', D: '', E: '' }, correctAnswer: 'A', image: null, answerType: 'options' }]);
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handlePostQuestions = async () => {
    try {
      await axios.post('http://localhost:5000/auth/Economics-exam', { questions });
      console.log('Questions saved to MongoDB');
      // Update the client page with the new questions
      const { data: updatedQuestions } = await axios.get('http://localhost:5000/auth/Economics-exam');
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error saving questions:', error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  const onEditorStateChange = (editorState) => {
    handleQuestionChange(currentQuestionIndex, editorState);
  };

  const currentQuestionHtml = draftToHtml(convertToRaw(currentQuestion.question.getCurrentContent()));

  const handleAnswerTypeChange = (questionIndex, answerType) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].answerType = answerType;
      return updatedQuestions;
    });
  };
  const handleInstructionsChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].instructions = value;
      return updatedQuestions;
    });
  };


  // const handleDeleteQuestion = async (index) => {
  //   try {
      // Assuming each question has an '_id' property
  //     await deleteQuestion(questions[index]._id); 
  //     setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
  //     if (currentQuestionIndex === index) {
  //       setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  //     }
  //   } catch (error) {
  //     console.error('Error deleting question:', error);
  //   }
  // };


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
      <h1>ECONOMICS QUESTIONS</h1>
      <div>  
      <div>
        <h3>Instructions</h3>
      <textarea
            placeholder='Your general instructions here:'
            id="instructions"
            value={currentQuestion.instructions}
            onChange={(e) => handleInstructionsChange(currentQuestionIndex, e.target.value)}
            style={{
                width: "100%",
                padding: "20px",
                border: "1px solid brown"
              }}
          />
      </div>      
        <label htmlFor="image">Image:</label>
        <Form.Control
          id="image"
          type="file" 
          accept="image/*"
          onChange={(e) => handleImageChange(currentQuestionIndex, e.target.files[0])}
          multiple
        />
        <Editor
          placeholder='Your Question here:'
          editorState={currentQuestion.question}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="toolbar-class"
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
           
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
          }}
        />
      </div>
      

      <div className='options-cover'>
            <div className='options-section'>
                <div className="options-Container">
                    <div className='Answer-Type'>
                    <label>Answer Type:</label>
                    <div>
                    <input
                        type="radio"
                        id="optionAnswer"
                        name="answerType"
                        checked={currentQuestion.answerType === 'options'}
                        onChange={() => handleAnswerTypeChange(currentQuestionIndex, 'options')}
                    />
                    <label htmlFor="optionAnswer">Objective Answer</label>
                    </div>
                    <div>
                    <input
                        type="radio"
                        id="writtenAnswer"
                        name="answerType"
                        checked={currentQuestion.answerType === 'written'}
                        onChange={() => handleAnswerTypeChange(currentQuestionIndex, 'written')}
                    />
                    <label htmlFor="writtenAnswer">Written Answer</label>
                    </div></div>
                </div>

                {currentQuestion.answerType === 'options' ? (
                <div className='options-Container'>
                    <div className='options-For-Answer'>
                    <div>
                        <label htmlFor="optionA">Option A:</label>
                    </div>
                    <div>
                        <input
                        id="optionA"
                        type="text"
                        value={currentQuestion.options.A}
                        onChange={(e) => handleOptionChange(currentQuestionIndex, 'A', e.target.value)}
                        />
                    </div>
                    </div>

                    <div className='options-For-Answer'>
                    <div>
                        <label htmlFor="optionB">Option B:</label>
                    </div>
                    <div>
                        <input
                        id="optionB"
                        type="text"
                        value={currentQuestion.options.B}
                        onChange={(e) => handleOptionChange(currentQuestionIndex, 'B', e.target.value)}
                        />
                    </div>
                    </div>

                    <div className='options-For-Answer'>
                    <div>
                        <label htmlFor="optionC">Option C:</label>
                    </div>
                    <div>
                        <input
                        id="optionC"
                        type="text"
                        value={currentQuestion.options.C}
                        onChange={(e) => handleOptionChange(currentQuestionIndex, 'C', e.target.value)}
                        />
                    </div>
                    </div>

                    <div className='options-For-Answer'>
                    <div>
                        <label htmlFor="optionD">Option D:</label>
                    </div>
                    <div>
                        <input
                        id="optionD"
                        type="text"
                        value={currentQuestion.options.D}
                        onChange={(e) => handleOptionChange(currentQuestionIndex, 'D', e.target.value)}
                        />
                    </div>
                    </div>

                    <div className='options-For-Answer'>
                    <div>
                        <label htmlFor="optionE">Option E:</label>
                    </div>
                    <div>
                        <input
                        id="optionE"
                        type="text"
                        value={currentQuestion.options.E}
                        onChange={(e) => handleOptionChange(currentQuestionIndex, 'E', e.target.value)}
                        />
                    </div>
                    </div>
                    <br></br>
                    <label htmlFor="correctAnswer">Correct Answer:</label>
                    <select
                    id="correctAnswer"
                    value={currentQuestion.correctAnswer}
                    onChange={(e) => handleCorrectAnswerChange(currentQuestionIndex, e.target.value)}
                    >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    </select> 
                        
                </div>
                
                ) : (

                <div>
                    {/* <label htmlFor="writtenAnswer">Written Answer:</label> */}
                    <textarea
                    placeholder='Your Answer Here'
                    style={{ width: "80%" }}
                    id="writtenAnswer"
                    value={currentQuestion.writtenAnswer || ''}
                    onChange={(e) =>
                        setQuestions((prevQuestions) => {
                        const updatedQuestions = [...prevQuestions];
                        updatedQuestions[currentQuestionIndex].writtenAnswer = e.target.value;
                        return updatedQuestions;
                        })
                    }
                    ref={textareaRef}
                />
                {autoCompleteOptions.length > 0 && (
                    <div>
                    <h4>Auto-Complete Options:</h4>
                    <ul>
                        {autoCompleteOptions.map((option, index) => (
                        <li key={index} onClick={() => selectAutoCompleteOption(option)}>
                            {option}
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
                </div>
            )}
                    <br></br>  
                <div className='All-Button'>
                    <Button onClick={handlePreviousQuestion}>Previous</Button>
                    <Button onClick={handleNextQuestion}>Next</Button>
                    <Button onClick={handlePostQuestions}>Post</Button>
                </div>
            </div>
            <div className='Preview-Section'>
            <div >
                {/* <p>{currentQuestion.instructions}</p> */}

                <h2>Preview</h2>
                <div className='Correct-Answer'>
                <p>Number of Questions: {questions.length}</p>
                    <p>Question: </p>
                </div>
                {currentQuestion.image && (
                <div>
                    <h3>Image:</h3>
                    <img src={currentQuestion.image} alt="Quiz" style={{ maxWidth: '60%', width: '100%', height: 'auto' }} />
                </div>
                )}
                <div dangerouslySetInnerHTML={{ __html: currentQuestionHtml }} />
                {currentQuestion.answerType === 'options' ? (
                <div>
                    <div className='Correct-Answer'>
                    <p>Answer Options:</p>
                    </div>
                    <div className='Answer-Options'>
                        <ul>
                        <li>A. {currentQuestion.options.A}</li>
                        <li>B. {currentQuestion.options.B}</li>
                        <li>C. {currentQuestion.options.C}</li>
                        <li>D. {currentQuestion.options.D}</li>
                        <li>E. {currentQuestion.options.E}</li>
                        </ul>
                    </div>
                    <div className='Correct-Answer'>
                    <p>Correct Answer: {currentQuestion.correctAnswer}</p>
                    </div>
                </div>
                ) : (
                <div>
                    <div className='Correct-Answer'>
                    <p>Written Answer: </p>
                    </div>
                    <p>{currentQuestion.writtenAnswer || ''}</p>
                </div>
                )}
            </div>
            <div className='Delete-Post'>
            <Button onClick={handlePostQuestions}>Post</Button>
            <Button onClick={() => handleDeleteQuestion(currentQuestionIndex)}>
              Delete
            </Button>
            </div>
            </div>
      </div>

    </div>
  );
};

export default Jss1Econs;



