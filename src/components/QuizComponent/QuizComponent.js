import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './QuizComponent.css'
// Define the questions as a constant array
const questionsData = [
  {
    id: 1,
    text: "What's the capital of France?",
    type: 'multiple_choice',
    options: [
      { id: 1, text: 'Paris' },
      { id: 2, text: 'London' },
      { id: 3, text: 'Berlin' },
      { id: 4, text: 'Madrid' },
    ],
  },
  {
    id: 2,
    text: 'Who wrote "Romeo and Juliet"?',
    type: 'fill_in_the_blank',
  },
  {
    id: 3,
    text: 'Match the following countries with their capitals:',
    type: 'matching',
    options: [
      { id: 1, text: 'France' },
      { id: 2, text: 'Germany' },
      { id: 3, text: 'Italy' },
    ],
  },
];

const QuizComponent = () => {
  const { questionBank } = useParams(); // Assuming you're using React Router for routing
  const [questions] = useState(questionsData); // Set questions as a constant

  const [answers, setAnswers] = useState({});

  const handleInputChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const handleSubmit = () => {
    // Handle submission of answers (could be sending to server for grading)
    console.log('Submitted answers:', answers);
  };

  return (
    <div className='bigger-quiz'>
      <div className="quiz-container">
        <h1 className="quiz-title">Quiz</h1>
        <div className="questions-container">
          {questions.map(question => (
            <div key={question.id} className="question">
              <h3>{question.text}</h3>
              {question.type === 'matching' && (
                <ul className="options">
                  {question.options.map(option => (
                    <li key={option.id} className="option">
                      {option.text}:
                      <input
                        type="text"
                        className="input"
                        value={answers[question.id] || ''}
                        onChange={e => handleInputChange(question.id, e.target.value)}
                      />
                    </li>
                  ))}
                </ul>
              )}
              {question.type === 'fill_in_the_blank' && (
                <input
                  type="text"
                  className="input"
                  value={answers[question.id] || ''}
                  onChange={e => handleInputChange(question.id, e.target.value)}
                />
              )}
              {question.type === 'multiple_choice' && (
                <ul className="options">
                  {question.options.map(option => (
                    <li key={option.id} className="option">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name={`question_${question.id}`}
                          value={option.id}
                          checked={answers[question.id] === option.id}
                          onChange={() => handleInputChange(question.id, option.id)}
                        />
                        {option.text}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default QuizComponent;