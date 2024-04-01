import React, { useState } from 'react';
import CountdownTimer from '../Countdown';
import NavBar_Student from '../NavBar_Student';
import './Exams.css';

const Question = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    props.handleAnswer(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div>
      <CountdownTimer />
      <div className='Examsback' style={{ textAlign: "center" }}>
        <div className='Exams'>
          <h5>{props.question}</h5>
          {props.answers.map((answer) => (
            <div key={answer}>
              <button
                onClick={() => handleAnswerSelection(answer)}
                disabled={selectedAnswer === answer}
              >
                {answer}
              </button>
            </div>
          ))}
          <div className="Submit">
            <button onClick={handleSubmit} disabled={!selectedAnswer}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mathematics = ({ updateScore }) => {
  const [examScore, setExamScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: 'What does HTML stand for?',
      answers: ["Hyperlink Text Markup Language", "Hyper Text Markup Language", "Hyper Transfer Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: 'Which programming language is commonly used for adding interactivity to web pages?',
      answers: ['HTML', "CSS", 'JavaScript'],
      correctAnswer: 'JavaScript'
    },
    {
      question: 'What is the purpose of CSS in web development?',
      answers: ['To define the structure and layout of a web page', "To style and visually enhance the appearance of a web page", "To add interactivity and functionality to a web page"],
      correctAnswer: "To style and visually enhance the appearance of a web page"
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (answer === questions[currentQuestion].correctAnswer) {
      const updatedScore = examScore ? examScore + 10 : 10; // Initialize score if null
      localStorage.setItem("Js1FirstMathExamScore", JSON.stringify (updatedScore))
      setExamScore(updatedScore);
      updateScore(updatedScore);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className='Exampage' style={{ fontSize: "12px" }}>
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion].question}
          answers={questions[currentQuestion].answers}
          handleAnswer={handleAnswer}
        />
      )}
      {currentQuestion === questions.length && (
        <div>
          <NavBar_Student />
          <div className='GoodLuck'>
            <div className='GoodLuckButton'>
              <p>Total Score: {examScore}%</p>
              <p>Good Luck !</p>
              <button onClick={() => { window.location.href = "./subjects"; }}>Back to Class</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mathematics;





