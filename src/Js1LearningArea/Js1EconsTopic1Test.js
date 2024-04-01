import React, { useState } from 'react';
import Navba from '../NavBar_out';
import CountdownTimer from '../Countdown';
import NavBar_Student from '../NavBar_Student';


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
          <div className="Submit">
            <button onClick={handleSubmit} disabled={!writtenAnswer}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Js1EconsTopic1Test = ({updateScore}) => {
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
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (answer === questions[currentQuestion].correctAnswer) {
      const updatedScore = examScore ? examScore + 10 : 10; // Initialize score if null
      localStorage.setItem("Score", JSON.stringify (updatedScore))
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
          answers={questions[currentQuestion].answers}
          handleAnswer={handleAnswer}
        />
      )}
      {currentQuestion === questions.length && (
        
          <div className='GoodLuck'>
                  <div className='GoodLuckButton'>
                      <p>Total Score: {examScore}%</p>
                      <p>Good Luck !</p>
                     <button onClick={() =>{ window.location.href = "./LearnEconomics";}}>Next Topic</button>
                  </div>
              </div>
     
      )}
    </div>
  );
};

export default Js1EconsTopic1Test;
