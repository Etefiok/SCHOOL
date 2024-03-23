import React, { useState } from 'react';
import CountdownTimer from '../Countdown';
import NavBar_Student from '../NavBar_Student';

const Question = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerSelection = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    props.handleAnswer(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div>
      <CountdownTimer />
      <div className='Examsback' style={{textAlign: "center" }}>
        <div className='Exams'>
          <h5>{props.question}</h5>
          <form>
            {props.options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={handleAnswerSelection}
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
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

const SocialStudies = ({updateScore}) => {
  const [examScore, setExamScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);


  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['A. Paris', 'B. London', 'C. Berlin'],
      correctAnswer: 'A'
    },
    {
      id: 2,
      question: 'What is the currency of Japan?',
      options: ['A. Yen', 'B. Dollar', 'C. Euro'],
      correctAnswer: 'A'
    },
    {
      id: 3,
      question: 'Where is the Great Wall of China located?',
      options: ['A. Beijing', 'B. Shanghai', 'C. Xi’an'],
      correctAnswer: 'C'
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (answer === questions[currentQuestion].correctAnswer) {
      const updatedScore = examScore ? examScore + 10 : 10; // Initialize score if null
      localStorage.setItem("Js1FirstSocialExamScore", JSON.stringify (updatedScore))
      setExamScore(updatedScore);
      updateScore(updatedScore);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className='Exampage' style={{fontSize:"12px"}}>
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
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

export default SocialStudies;
