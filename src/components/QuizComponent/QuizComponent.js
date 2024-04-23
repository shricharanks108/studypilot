import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './QuizComponent.css'
// Define the questions as a constant array
const questionsData = [
  {
    id: 1,
    text: "The opening through which the computer receives data via the network",
    type: 'multiple_choice',
    options: [
      { id: 1, text: 'Port' },
      { id: 2, text: 'Active' },
      { id: 3, text: 'Passive' },
      { id: 4, text: 'Harbor' },
    ],
  },
  {
    id: 2,
    text: "Programs that deny children access to certain websites or prevent children from accessing certain software on a computer",
    type: 'multiple_choice',
    options: [
      { id: 1, text: 'Social networking sites' },
      { id: 2, text: 'Encryption software' },
      { id: 3, text: 'Password grabbers and loggers' },
      { id: 4, text: 'Internet monitoring programs' },
    ],
  },
  {
    id: 3,
    text: "The process whereby an individual gains access to a computer by following someone into a secure room",
    type: 'multiple_choice',
    options: [
      { id: 1, text: 'Electronic piggybacking' },
      { id: 2, text: 'Physical piggybacking' },
      { id: 3, text: 'Phishing' },
      { id: 4, text: 'Data manipulation' },
    ],
  },
  {
    id: 4,
    text: "Computer software designed to sniff packets of data as the information is moved across a network",
    type: 'multiple_choice',
    options: [
      { id: 1, text: 'Packet sniffing' },
      { id: 2, text: 'Dumpster diving' },
      { id: 3, text: 'Social engineering' },
      { id: 4, text: 'War driving' },
    ],
  },
  {
    id: 5,
    text: "The sending of repeated threatening or harassing electronic communications via e-mail, websites, or other digital medium that causes another individual to be harmed or deeply disturbed",
    type: 'multiple_choice',
    options: [
      { id: 1, text: 'Online prostitution' },
      { id: 2, text: 'Unethical communication' },
      { id: 3, text: 'Cyberbullying' },
      { id: 4, text: 'Online harassment' },
    ],
  },
  {
    id: 6,
    text: "The theft of someone's personal information such as their credit card number or social security number",
    type: 'multiple_choice',
    options: [
      { id: 1, text: 'Hacking' },
      { id: 2, text: 'Phishing' },
      { id: 3, text: 'Cybercrime' },
      { id: 4, text: 'Identity Theft' },
    ],
  },
  {
    id: 7,
    text: "The theft of someone's online identity",
    type: 'multiple_choice',
    options: [
      { id: 1, text: 'Virtual Identity Theft' },
      { id: 2, text: 'Criminal Record Identity' },
      { id: 3, text: 'Assumption Of Identity' },
      { id: 4, text: 'Credit Or Financial Theft' },
    ],
  },
  {
    id: 8,
    text: 'The theft of telecommunication services',
    type: 'short_answer',
  },
  {
    id: 9,
    text: 'The process whereby an illegal user waits until a legitimate user neglects to sign off and then takes controls of the person\'s account',
    type: 'short_answer',
  },
  {
    id: 10,
    text: 'Act that provided a variety of means to protect potential identity theft victims, as well as a means of assisting victims with repairing their credit',
    type: 'short_answer',
  },
  {
    id: 11,
    text: 'Program that is secretly inserted on the network or operating system designed for damage or sabotage',
    type: 'short_answer',
  },
  {
    id: 12,
    text: 'Programs that are installed on a target computer as a means of recording each key that is pressed by the user of the target computer',
    type: 'short_answer',
  },
  {
    id: 13,
    text: 'Program that allows users to intercept data while it is en route to a website',
    type: 'short_answer',
  },
  {
    id: 14,
    text: 'Individuals who violate computer security for little reason beyond maliciousness or for personal gain',
    type: 'short_answer',
  },
  {
    id: 15,
    text: 'A crime that creatively applied technology and received extensive coverage in the news media',
    type: 'short_answer',
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
        <h1 className="quiz-title">Midterm Practice</h1>
        <div className="questions-container">
          {questions.map(question => (
            <div key={question.id} className="question">
              <h3>{question.text}</h3>
              {question.type === 'short_answer' && (
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
                        {"\t"+option.text}
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