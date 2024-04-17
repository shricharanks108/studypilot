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
        <div class="chapter-list">
            <div class="chapter-name"><Link to="/chapterPage">1. Tour of Computer Systems</Link></div>
            <div class="chapter-date">by 1/18</div>
            <div class="chapter-name"><Link to="/chapterPage">2. Representing and Manipulating Information</Link></div>
            <div class="chapter-date">by 1/25</div>
            <div class="chapter-name"><Link to="/chapterPage">3. Machine Level Representation</Link></div>
            <div class="chapter-date">by 1/30</div>
            <div class="chapter-name"><Link to="/chapterPage">4. Processor Architecture</Link></div>
            <div class="chapter-date">by 2/14</div>
            <div class="chapter-name"><Link to="/chapterPage">5. Optimizing Program Performance</Link></div>
            <div class="chapter-date">[...]</div>
            <div class="chapter-name"><Link to="/chapterPage">6. The Memory Heirarchy</Link></div>
            <div class="chapter-date">by 2/21</div>
            <div class="chapter-name"><Link to="/chapterPage">7. Linking</Link></div>
            <div class="chapter-date">[...]</div>
            <div class="chapter-name"><Link to="/chapterPage">8. Exceptional Control Flow</Link></div>
            <div class="chapter-date">[...]</div>
            <div class="chapter-name"><Link to="/chapterPage">9. Virtual Memory</Link></div>
            <div class="chapter-date">by 2/30</div>
            <div class="chapter-name"><Link to="/chapterPage">10. System Level I/O</Link></div>
            <div class="chapter-date">[...]</div>
            <div class="chapter-name"><Link to="/chapterPage">11. Network Programming</Link></div>
            <div class="chapter-date">[...]</div>
            <div class="chapter-name"><Link to="/chapterPage">12. Concurrent Programming</Link></div>
            <div class="chapter-date">by 3/7</div>
        </div>
        </div>



      <div class="exams">
        <h2>Exams:</h2>
        <ul>
          <li><Link to="/examPage"><span style={{ marginLeft: '20px' }}></span>Midterm (Ch 1-3) <span style={{ marginLeft: '290px' }}></span>4/26</Link></li>
          <li><Link to="/examPage"><span style={{ marginLeft: '20px' }}></span>Final (Ch 4,6,9,12) <span style={{ marginLeft: '288px' }}></span>5/10</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default CoursePage;
