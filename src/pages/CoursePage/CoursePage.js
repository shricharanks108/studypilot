import React from 'react';
import './CoursePage.css'; 
import { Link } from 'react-router-dom';

function CoursePage() {
  return (
    <div class="course_page" style={{ display: 'flex', flexDirection: 'column' }}>
      <div class="header1">
        <h2> CS 350 - Computer Systems</h2>
      </div>
      <div class="header2">
        <h2>Textbook: Computer Systems - A Programmer's Perspective</h2>
      </div>
      <div class="link">
        <Link to="/upload"><span style={{ marginLeft: '10px' }}></span>Upload</Link>
      </div>

      <div class="chapters">
        <h2>Chapters:</h2>
        <ul>
          <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}></span>1. Chapter 1 <span style={{ marginLeft: '50px' }}></span> by 4/18</Link></li>
          <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}></span>2. Chapter 2 <span style={{ marginLeft: '50px' }}></span> by 4/25</Link></li>
          <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}></span>3. Chapter 3 <span style={{ marginLeft: '50px' }}></span> by 4/30</Link></li>
        </ul>
      </div>
      <div class="exams">
        <h2>Exams:</h2>
        <ul>
          <li><Link to="/examPage"><span style={{ marginLeft: '20px' }}></span>Midterm 1 (Ch 1-3) <span style={{ marginLeft: '50px' }}></span>4/26</Link></li>
          <li><Link to="/examPage"><span style={{ marginLeft: '20px' }}></span>Midterm 2 (Ch 4-7) <span style={{ marginLeft: '50px' }}></span>5/10</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default CoursePage;
