import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AddDetails from './Adddetails';
import './Jss1ExamsFolder/Exams.css';
import { useNavigate } from 'react-router-dom';
import Navba from './NavBar';
import CountdownTimer from './Countdown';



const Question = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    // const [showSubmitButton, setShowSubmitButton] = useState(false);
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
        
      <div className='Examsback' style={{textAlign: "center" }}>
        <div className='Exams'>
        <h5>{props.question}</h5>
       
        {props.answers.map((answer) => (

        <div>
          <button style={{}}
            key={answer}
            onClick={() => handleAnswerSelection(answer)}
            disabled={selectedAnswer === answer}>
          
            {answer}
          </button>
        </div>
        
        ))}
        <div className="Submit" >
        <button onClick={handleSubmit} disabled={!selectedAnswer}>
          Submit
        </button>
        </div>
      </div>
      </div>
      </div>
    );
  };

  
  
  const Exams = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);
    



  
    const questions = [
      {
        question: 'What does HTML stand for?',
        answers: ["Hyperlink Text Markup Language",
                "Hyper Text Markup Language",
                 "Hyper Transfer Markup Language"],
      },
      {
        question: 'Which programming language is commonly used for adding interactivity to web pages? Which programming language is commonly used for adding interactivity to web pages  ',
        answers: ['HTML',
                    "CSS",
                    'JavaScript'],
      },
      {
        question: 'What is the purpose of CSS in web development?',
        answers: ['To define the structure and layout of a web page',
                 "To add interactivity and functionality to a web page",
                 "To style and visually enhance the appearance of a web page"],
      },
      
    ];
  
    const handleAnswer = (answer) => {
      setAnswers([...answers, answer]);
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion === questions.length - 1) {
        setQuestionsAnswered(true);
      }
    };

    // const Navigate = useNavigate();

    // function HomePage(){
    //     Navigate("/HomePage")
    // };


   

     

      
    return (
      <div className='Exampage' style={{fontSize:"12px"}}>
        
        {!questionsAnswered && (
          <Question
            question={questions[currentQuestion].question}
            answers={questions[currentQuestion].answers}
            handleAnswer={handleAnswer}
            
          />
          
        )}
        {questionsAnswered && (
            <div>
            
            <Navba />

           
            
          <div className='GoodLuck'>
            <h3>Good Luck !</h3>
            
          </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Exams;



 