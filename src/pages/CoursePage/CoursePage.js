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
        <div className="chapter-list">
            <div className="chapter-name"><Link to="/chapter/1">1. An Introduction to High-Technology Crime</Link></div>
            <div className="chapter-date">by 1/18</div>
            <div className="chapter-name"><Link to="/chapter/2">2. Hackers, Crackers, and Phone Phreaks</Link></div>
            <div className="chapter-date">by 1/25</div>
            <div className="chapter-name"><Link to="/chapter/3">3. Identity Theft: Tools and Techniques of 21st Century Bandits</Link></div>
            <div className="chapter-date">by 1/30</div>
            <div className="chapter-name"><Link to="/chapter/4">4. Digital Child Pornography and the Abuse of Children in Cyberspace</Link></div>
            <div className="chapter-date">by 2/14</div>
            <div className="chapter-name"><Link to="/chapter/5">5. Financial Fraud and Con Artistry on the Internet</Link></div>
            <div className="chapter-date">[...]</div>
            <div className="chapter-name"><Link to="/chapter/6">6. Online Harassment and Cyberstalking</Link></div>
            <div className="chapter-date">by 2/21</div>
            <div className="chapter-name"><Link to="/chapter/7">7. Intellectual Property Theft and Digital File Sharing</Link></div>
            <div className="chapter-date">[...]</div>
            <div className="chapter-name"><Link to="/chapter/8">8. Investigations on the Web: Examining Online Investigations and Sting Operations</Link></div>
            <div className="chapter-date">[...]</div>
            <div className="chapter-name"><Link to="/chapter/9">9. Seizure of Digital Evidence</Link></div>
            <div className="chapter-date">by 2/30</div>
            <div className="chapter-name"><Link to="/chapter/10">10. Executing a Search Warrant for Digital Evidence</Link></div>
            <div className="chapter-date">[...]</div>
            <div className="chapter-name"><Link to="/chapter/11">11. An Introduction to Computer Forensics</Link></div>
            <div className="chapter-date">[...]</div>
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
