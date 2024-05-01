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
          {props.diagram}
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
          <div className="GoodLuckButton">
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
      question: 'What is the area of a circle with a diameter of 10 cm? (Use π = 3.14)',
      answers: [
        '(A) 50 cm²',
        '(B) 78.5 cm²',
        '(C) 100 cm²',
        '(D) 125.6 cm²',
        '(E) 150 cm²',
      ],
      correctAnswer: '(B) 78.5 cm²',
      diagram: (
        <img
          url="./images.jpg/circle.jpg"
          alt="Diagram of a circle with a diameter of 10 cm"
          style={{ width: '200px', height: 'auto' }}
        />
      ),
    },
    {
      question: 'What is the area of a right-angled triangle with a base of 6 cm and a height of 8 cm?',
      answers: [
        'A. 24 cm²',
        'B. 36 cm²',
        'C. 48 cm²',
        'D. 72 cm²',
        'E. 96 cm²',
      ],
      correctAnswer: 'C. 48 cm²',
      diagram: (
        <img
          src="right-angled-triangle-diagram.jpg"
          alt="Diagram of a right-angled triangle with a base of 6 cm and a height of 8 cm"
          style={{ width: '200px', height: 'auto' }}
        />
      ),
    },
    {
      question: 'What is the perimeter of a rectangular plot of land with a length of 20 m and a width of 15 m?',
      answers: [
        'A. 40 m',
        'B. 50 m',
        'C. 70 m',
        'D. 80 m',
        'E. 100 m',
      ],
      correctAnswer: 'D. 80 m',
      diagram: (
        <img
          src="rectangular-plot-diagram.jpg"
          alt="Diagram of a rectangular plot of land with a length of 20 m and a width of 15 m"
          style={{ width: '200px', height: 'auto' }}
        />
      ),
    },
    {
      question: 'What is the volume of a cube with a side length of 5 cm?',
      answers: [
        'A. 25 cm³',
        'B. 50 cm³',
        'C. 75 cm³',
        'D. 100 cm³',
        'E. 125 cm³',
      ],
      correctAnswer: 'D. 100 cm³',
      diagram: (
        <img
          src="cube-diagram.jpg"
          alt="Diagram of a cube with a side length of 5 cm"
          style={{ width: '200px', height: 'auto' }}
        />
      ),
    },
    {
      question: 'What is the slope of a line passing through the points (2, 3) and (5, 7)?',
      answers: [
        'A. 1',
        'B. 2',
        'C. 3',
        'D. 4',
        'E. 5',
      ],
      correctAnswer: 'B. 2',
      diagram: (
        <img
          src="line-slope-diagram.jpg"
          alt="Diagram of a line passing through the points (2, 3) and (5, 7)"
          style={{ width: '200px', height: 'auto' }}
        />
      ),
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (answer === questions[currentQuestion].correctAnswer) {
      const updatedScore = examScore ? examScore + 10 : 10; // Initialize score if null
      localStorage.setItem("Js1FirstMathematicsExamScore", JSON.stringify (updatedScore))
      setExamScore(updatedScore);
      updateScore(updatedScore);
    }
    else (localStorage.setItem("Js1FirstMathematicsExamScore", JSON.stringify ()))

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
   
        <div className='Exampage' style={{ fontSize: "12px" }}>
        {currentQuestion < questions.length && (
            <Question
            description={questions[currentQuestion].description}
            question={questions[currentQuestion].question}
            answers={questions[currentQuestion].answers}
            handleAnswer={handleAnswer}
            diagram={questions[currentQuestion].diagram}
            />
        )}
        {currentQuestion === questions.length && (
            <div>
            <NavBar_Student />
            <div className='GoodLuck'>
                <div className='GoodLuckButton'>
                <p>Total Score: {examScore}/50%</p>
                <p>Good Luck !</p>
                <button onClick={() => { window.location.href = "./Subjects_For_Exams"; }}>Back to Class</button>
                </div>
            </div>
            </div>
            
        )}
        </div>
  
  );
};

export default Mathematics;
