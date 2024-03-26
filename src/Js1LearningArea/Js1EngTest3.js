import React, { useState } from 'react';
import NavBar_Student from '../NavBar_Student';
import CountdownTimer from '../Countdown';

// for edtitor tools in textarea
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles




const Question = (props) => {
  const [writtenAnswer, setWrittenAnswer] = useState('');

  const handleAnswerChange = (e) => {
    setWrittenAnswer(e.target.value);
  };

  const handleSubmit = () => {
    props.handleAnswer(writtenAnswer);
    setWrittenAnswer('');
  };



// for edtitor tools in textarea
const [editorHtml, setEditorHtml] = useState('');

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];



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



const Js1EngTest3 = ({ updateScore }) => {
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
        questionScore = 2;
      }
    } else if (questions[currentQuestion].type === 'Theory') {
      // Check if the user's answer includes the correct answer as a keyword
      const correctAnswers = questions[currentQuestion].correctAnswer;
      const isAnyCorrect = correctAnswers.some((correctAnswer) =>
        answer.toLowerCase().includes(correctAnswer.toLowerCase())
      );
  
      if (isAnyCorrect) {
        isCorrect = true;
        questionScore = 3;
      }
    }
        
   
  
    const updatedScore = isCorrect ? (examScore ? examScore + questionScore: questionScore): examScore;
  
    localStorage.setItem("Js1EngTest3", JSON.stringify(updatedScore));
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
          {/* <NavBar_Student /> */}
          <div className='GoodLuck'>
                  <div className='GoodLuckButton'>
                      <p>Total Score: {examScore}/10%</p>
                      <p>Congratulation</p>
                     <button  onClick={() =>{ window.location.href = "./LearnEnglish";}}>Back to Class</button>
                  </div>
              </div>
        </div>
      )}
    </div>
  );
};

export default Js1EngTest3;
