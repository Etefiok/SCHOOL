import React, { useState, useEffect } from 'react';
import NavBar_Student from '../NavBar_Student';
import CountdownTimer from '../Countdown';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Question = (props) => {
  const [writtenAnswer, setWrittenAnswer] = useState('');
  const navigate = useNavigate();

  const handleAnswerChange = (e) => {
    setWrittenAnswer(e.target.value);
  };

  const handleSubmit = () => {
    props.handleAnswer(writtenAnswer);
    setWrittenAnswer('');
  };


  useEffect(() => {
    const verifyUser = async () => { 
      try {
        // const token = localStorage.getItem('token');
        const token = Cookies.get('token'); 
        console.log({token})
        if (token) {
          navigate('/LitInEnglish');
          return;
        }
        const response = await axios.get('http://localhost:5000/auth/verify?page=LitInEnglish', {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        console.log('Verify response:', response.data);
        if (response.data.status === true) {
          navigate('/LitInEnglish');

        } else {
          navigate('/Login_Student');
        }
      } catch (error) {
        console.error('Error verifying user:', error);
        if (error.response) {
          console.error('Server response:', error.response.data);
        }
 
        navigate('/Login_Student');
      }
    };

    verifyUser();
  }, [navigate]);


  return (
    <div>
      <CountdownTimer />
      <div className='Examsback' style={{ textAlign: "center" }}>
        <div className='Exams'>
          <h5>{props.question}</h5>
          <form>
            {props.type === 'Objective' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px', textAlign:'left' }}>
                {props.answers.map((answer, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="answer"
                      value={answer}
                      checked={writtenAnswer === answer}
                      onChange={handleAnswerChange}
                    />
                    {answer}
                  </label>
                ))}
              </div>
            ) : (
              <textarea className="text-Area"
                value={writtenAnswer}
                onChange={handleAnswerChange}
                placeholder="Write your answer here"
              />
            )}
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

const LitInEnglish = ({ updateScore }) => {
  const [examScore, setExamScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      type: 'Objective',
      question: 'There isn’t _____ dirt on the paper.',
      answers: ["(A.) many", "(B.) much", "(C.) some", "(D.) a", "(E.) a few"],
      correctAnswer: "(B.) much"
    },
    {
      type: 'Objective',
      question: 'There aren’t ________ books on the table.',
      answers: ['A. any', 'B. some', 'C. much', 'D. a lot', 'E. few'],
      correctAnswer: 'A. any'
    },

    {
      type: 'Theory',
      question: 'Explain the concept of globalization in your own words.',
      correctAnswer: ['Globalization', 'any', 'much']
    },

    {
      type: 'Theory',
      question: 'Explain the concept of globalization in your own words.',
      correctAnswer: ['Globalization', 'any', 'much']
    }
    // Add more questions here
  ];

  const handleAnswer = (answer) => {
    let isCorrect = false;
    let questionScore = 0;
  
    if (questions[currentQuestion].type === 'Objective') {
      if (answer === questions[currentQuestion].correctAnswer) {
        isCorrect = true;
        questionScore = 10;
      }
    } else if (questions[currentQuestion].type === 'Theory') {
      // Check if the user's answer includes the correct answer as a keyword
      const correctAnswers = questions[currentQuestion].correctAnswer;
      const isAnyCorrect = correctAnswers.some((correctAnswer) =>
        answer.toLowerCase().includes(correctAnswer.toLowerCase())
      );
  
      if (isAnyCorrect) {
        isCorrect = true;
        questionScore = 20;
      }
    }
        
   
  
    const updatedScore = isCorrect ? (examScore ? examScore + questionScore: questionScore): examScore;
  
    localStorage.setItem("Js1FirstLitInEnglishExamScore", JSON.stringify(updatedScore));
    setExamScore(updatedScore);
    updateScore(updatedScore);
  
    setAnswers([...answers, { answer, isCorrect }]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className='Exampage' style={{ fontSize: "12px" }}>
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion].question}
          type={questions[currentQuestion].type}
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
                      <p>Congratulations !</p>
                     <button onClick={() =>{ window.location.href = "./Subjects_For_Exams";}}>Back to Class</button>
                  </div>
              </div>
        </div>
      )}
    </div>
  );
};

export default LitInEnglish;
