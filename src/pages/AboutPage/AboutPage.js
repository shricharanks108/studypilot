import React from 'react';
import './AboutPage.css';
import PeopleIcon from './people.svg';

function App() {
  return (
    <div className="container">
      <div className="icon-text-container">
        <img src={PeopleIcon} alt="People" className="icon" />
        <div>
          <h1>About Us</h1>
          <p>We are a group of students in New Jersey Institute of Technology's CS 485 with Dr. Suresh Kumar building out our product, StudyPilot! This was a 
              semester-long project completed in collaboration with Palak A, Felix C, Vidhi D, and Shricharan KS 🚀.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
