import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa';
import axios from 'axios';

const Daily_Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [grammarError, setGrammarError] = useState('');
  const navigate = useNavigate();

  const questions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      message: "The capital of France is Paris."
    },
    {
      question: "What is the largest ocean in the world?",
      answer: "Pacific Ocean",
      message: "The largest ocean in the world is the Pacific Ocean."
    },
    {
      question: "What is the currency of Japan?",
      answer: "Yen",
      message: "The currency of Japan is the Yen."
    },
    {
      question: "Who was the first president of the United States?",
      answer: "George Washington",
      message: "The first president of the United States was George Washington."
    },
    {
      question: "What is the tallest mountain in the world?",
      answer: "Mount Everest",
      message: "The tallest mountain in the world is Mount Everest."
    }
  ];

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer('');
    setShowAnswer(false);
    setCorrectAnswer('');
    setGrammarError('');
  };

  const handleSubmit = () => {
    let isCorrect = false;
    let grammarIssue = false;

    for (let i = 0; i < questions.length; i++) {
      if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
        isCorrect = true;
        if (userAnswer.charAt(0) !== userAnswer.charAt(0).toUpperCase() || !(/^[a-zA-Z0-9 .,-]+$/.test(userAnswer))) {
          grammarIssue = true;
        }
        break;
      } else if (userAnswer.toLowerCase().includes(questions[i].answer.toLowerCase())) {
        isCorrect = true;
        grammarIssue = true;
        break;
      }
    }

    if (isCorrect && !grammarIssue) {
      setCorrectAnswer(
        <div>
          <p>Your answer: {userAnswer}</p>
          <p>{questions[currentQuestion].message}</p>
          <FaCheck className="correct-answer-icon" />
        </div>
      );
    } else {
      setCorrectAnswer(
        <div>
          {grammarIssue && <FaExclamationTriangle className="grammar-error-icon" />}
          <p>Your answer: {userAnswer}</p>
          <p>Correct answer: {questions[currentQuestion].answer}</p>
          {!grammarIssue && <FaTimes className="incorrect-answer-icon" />}
        </div>
      );
    }

    if (grammarIssue) {
      setGrammarError(
        <div>
          <p>Your answer should start with a capital letter and only contain letters, numbers, spaces, and the following punctuation: . , -</p>
        </div>
      );
    } else {
      setGrammarError('');
    }

    setShowAnswer(true);
    setUserAnswer('');
  };

  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotice(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showNotice && (
        <div className="notice-overlay">
          <div className="noticeboard">
            <h4>Daily Quiz</h4>
            <div>
              <h6>{questions[currentQuestion].question}</h6>
              <div>
                {!showAnswer && (
                  <textarea
                    style={{ width: "100%" }}
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                  />
                )}
                <div className='handlebutton'>
                  {showAnswer && correctAnswer}
                  {showAnswer && grammarError}
                  {!showAnswer && <button onClick={handleSubmit}>Submit</button>}
                  {currentQuestion < questions.length - 1 && (
                    <>
                      <button onClick={handleNextQuestion}>Next Question</button>
                      <button onClick={() => setShowNotice(false)}>Close</button>
                    </>
                  )}
                  {currentQuestion === questions.length - 1 && (
                    <button onClick={() => setShowNotice(false)}>Close</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Daily_Quiz;
