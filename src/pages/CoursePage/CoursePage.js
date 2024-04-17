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
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>1.  Tour of Computer Systems</span><span style={{ marginLeft: '50px' }}>by 4/18</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>2.  Representing and Manipulating Information</span><span style={{ marginLeft: '50px' }}>by 4/25</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>3.  Machine Level Representation</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>4.  Processor Architecture</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>5.  Optimizing Program Performance</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>6.  The Memory Heirarchy</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>7.  Linking</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>8.  Exceptional Control Flow</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>9.  Virtual Memory</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>10. System Level I/O</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>11. Network Programming</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
            <li><Link to="/chapterPage"><span style={{ marginLeft: '20px' }}>12. Concurrent Programming</span><span style={{ marginLeft: '50px' }}>by 4/30</span></Link></li>
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
