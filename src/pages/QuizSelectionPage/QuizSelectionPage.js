import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './QuizSelectionPage.css'; // Import CSS file for styling

const QuizSelectionPage = () => {
    return (
        <div className="quiz-page">
            <h1 className="page-title">Quiz Page</h1>
            <div className="select-quiz">
                <h2>Select a quiz to begin</h2>
                <ul className="quiz-list">
                    <li><Link to="/quiz/quiz1">Quiz 1</Link></li>
                    <li><Link to="/quiz/quiz2">Quiz 2</Link></li>
                    {/* Add more quizzes as needed */}
                </ul>
            </div>
        </div>
    );
};

export default QuizSelectionPage;