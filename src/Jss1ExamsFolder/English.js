import React, { useState } from 'react';
import CountdownTimer from '../Countdown';
import NavBar_Student from '../NavBar_Student';
import '../Jss1ExamsFolder/Exams.css';

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

const English = ({ updateScore }) => {
  const [examScore, setExamScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      
      question: 'There isn’t _____ dirt on the paper.',
      answers: ["(A.) many","(B.) much", "(C.) some", "(D.) a", "(E.) a few"],
      correctAnswer: "(B.) much"
    },
    {
      question: 'There aren’t ________ books on the table.',
      answers: ['A. any',
      'B. few',
      'C. lots',
      'D. much',
      'E. some'],
      correctAnswer: 'A. any'
    },
    {
      question: 'The _______ idea of any piece of writing is called the theme.',
      answers: ['A. entire',
      'B. whole',
      'C. basic',
      'D. centre',
      'E. central',],
      correctAnswer: 'E. central'
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (answer === questions[currentQuestion].correctAnswer) {
      const updatedScore = examScore ? examScore + 10 : 10; // Initialize score if null
      localStorage.setItem("Js1FirstEnglishExamScore", JSON.stringify (updatedScore))
      setExamScore(updatedScore);
      updateScore(updatedScore);
    }
    else (localStorage.setItem("Js1FirstEnglishExamScore", JSON.stringify ()))

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
            />
        )}
        {currentQuestion === questions.length && (
            <div>
            <NavBar_Student />
            <div className='GoodLuck'>
                <div className='GoodLuckButton'>
                <p>Total Score: {examScore}/60%</p>
                <p>Good Luck !</p>
                <button onClick={() => { window.location.href = "./Subjects_For_Exams"; }}>Back to Class</button>
                </div>
            </div>
            </div>
            
        )}
        </div>
  
  );
};

export default English;





