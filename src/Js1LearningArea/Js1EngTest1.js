import React, { useState } from 'react';
import Navba from '../NavBar_out';
import CountdownTimer from '../Countdown';
import NavBar_Student from '../NavBar_Student';
import "../Jss1ExamsFolder/Exams.css";


const Question = (props) => {
  const [writtenAnswer, setWrittenAnswer] = useState('');

  const handleAnswerChange = (e) => {
    setWrittenAnswer(e.target.value);
  };

  const handleSubmit = () => {
    props.handleAnswer(writtenAnswer);
    setWrittenAnswer('');
  };

  // const goFullScreen = () => {
  //   const root = document.documentElement;
  //   if (root.requestFullscreen) {
  //     root.requestFullscreen();
  //   } else if (root.webkitRequestFullscreen) {
  //     root.webkitRequestFullscreen();
  //   } else if (root.msRequestFullscreen) {
  //     root.msRequestFullscreen();
  //   }
  // };



  // onClick={goFullScreen}
  return (
    <div >
      <CountdownTimer />
      <div className='Examsback' style={{textAlign: "center" }}>
        <div className='Exams'>
          <h5>{props.question}</h5>
          <form>
            <input
              type="text"
              value={writtenAnswer}
              onChange={handleAnswerChange}
              placeholder="Write your answer here"
            />
          </form>
          <div className="GoodLuckButton">
            <button onClick={handleSubmit} disabled={!writtenAnswer}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Js1EngTest1 = ({updateScore}) => {
  const [examScore,setExamScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questionsAnswered, setQuestionsAnswered] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      correctAnswer: 'Paris'
    },
    {
      id: 2,
      question: 'What is the currency of Japan?',
      correctAnswer: 'Yen'
    },
    {
      id: 3,
      question: 'Where is the Great Wall of China located?',
      correctAnswer: 'China'
    },
    {
      id: 3,
      question: 'Where is the Great Wall of China located?',
      correctAnswer: 'China'
    },
    {
      id: 2,
      question: 'What is the currency of Japan?',
      correctAnswer: 'Yen'
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (answer === questions[currentQuestion].correctAnswer) {
      const updatedScore = examScore ? examScore + 2 : 2; // Initialize score if null
      localStorage.setItem("Js1EngTest1", JSON.stringify (updatedScore))
      setExamScore(updatedScore);
      updateScore(updatedScore);
    }
    else (localStorage.setItem("Js1EngTest1", JSON.stringify (0)))
      
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className='Exampage' style={{fontSize:"12px"}}>
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion].question}
          answers={questions[currentQuestion].answers}
          handleAnswer={handleAnswer}
        />
      )}
      {currentQuestion === questions.length && (
        
          <div className='GoodLuck'>
                  <div className='GoodLuckButton'>
                      <p>Total Score: {examScore}/10%</p>
                      <p>Congratulation</p>
                     <button onClick={() =>{ window.location.href = "./LearnEnglish";}}>Next Topic</button>
                  </div>
              </div>
     
      )}
    </div>
  );
};

export default Js1EngTest1;
