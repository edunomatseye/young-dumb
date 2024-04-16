"use client"

import React, { useState } from 'react';

const style = {
  container: {
    padding: '20px',
    border: '1px solid #E0E0E0',
    borderRadius: '15px',
    width: 'max-content',
    marginBottom: '40px',
  },
  question: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  options: {
    marginBottom: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#FFF',
    fontSize: '14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correct: 'Berlin',
    },
  ];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    setShowFeedback(true);
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div style={style.container}>
      <div id="question" style={style.question}>
        {questions[currentQuestion].question}
      </div>
      <div style={style.options}>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option${index + 1}`}
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option${index + 1}`}>{option}</label>
          </div>
        ))}
      </div>
      {showFeedback && (
        <div id="feedback" style={style.feedback}>
          {selectedOption === questions[currentQuestion].correct
            ? 'Correct!'
            : 'Incorrect!'}
        </div>
      )}
      {currentQuestion === questions.length - 1 ? (
        <div id="totalScore" style={style.feedback}>
          Quiz Complete! You scored {score} out of {questions.length}!
        </div>
      ) : (
        <button style={style.button} id="submitBtn" onClick={handleSubmit}>
          Submit
        </button>
      )}
      {showFeedback && (
        <button
          style={style.button}
          id="nextBtn"
          onClick={handleNextQuestion}
        >
          Next
        </button>
      )}
    </div>
  );
}

