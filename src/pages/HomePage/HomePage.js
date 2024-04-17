import React from 'react';
import './HomePage.css'; // Make sure this path is correct
import Lottie from 'react-lottie';
import Button from 'react-bootstrap/Button';
import animationData from './2people.json';
import DownloadIcon from './download.svg';
import DocumentIcon from './document.svg';
import CodeIcon from './code.svg';
import ColorsImage from './colors1.png'; // Import colors.png image

function HomePage() {
  return (
    <div>
      <div className="welcome_page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 1 }}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            height={400}
            width={400}
          />
        </div>
        <div style={{ flex: 1, textAlign: 'left', paddingLeft: '50px' }}>
          <h1 className='Welcome'>Introducing StudyPilot!</h1>
          <p className="slogan">Where learning takes flight 🚀</p>
          <p className="Summary" style={{ paddingRight: '170px'}}>
            StudyPilot is a new AI-powered tool helping students achieve the grades they want! Find valuable study resources, notes, generate practice questions and more with ease. No more wasting time scrolling through different websites and apps to get the information you need to know.
          </p>

          <Button className='learn-more-button' href="/sign-up">Sign Up</Button>
          <a className='learn-more-button' href="/about-us">Learn More →</a>
        </div>
      </div>

      <div className="pricing-info">
        <div className="horizontal-bar"></div> {/* Horizontal bar */}
        <div className="vertical-bar"></div>   {/* Vertical bar */}
        <div className="left-categories">
          <div className="svg-container">
            <img src={DownloadIcon} alt="Download Icon" style={{ width: '50px', height: '50px' }} />
            <div className="text-container">
              <h5>Save Resources</h5>
              <p>Get access to downloadable resources</p>
            </div>
          </div>
          <div className="svg-container">
            <img src={DocumentIcon} alt="Document Icon" style={{ width: '50px', height: '50px' }} />
            <div className="text-container">
              <h5>Upload PDFs</h5>
              <p>Access comprehensive study materials</p>
            </div>
          </div>
          <div className="svg-container">
            <img src={CodeIcon} alt="Code Icon" style={{ width: '50px', height: '50px' }} />
            <div className="text-container">
              <h5>Understand Code</h5>
              <p>Explore coding exercises and examples</p>
            </div>
          </div>
        </div>

        <div className="left-categories">
          <div className="account-setup">
            <h6>Account Setup</h6>
            <h2>Free</h2>
          </div>

          <div className="queries">
            <h6>Queries</h6>
            <h2>Unlimited</h2>
          </div>
        </div>
        
        <div className="right-categories">
          <div className="cost-to-start">
            <h6>Cost To Get Started</h6>
            <h2>$0</h2>
          </div>

          <div className="response-time">
            <h6>Response Time</h6>
            <h2>&lt;20 seconds</h2>
          </div>
        </div>
      </div>

      <div className="svg-graphics">
        <div className="image-container">
          <img src={ColorsImage} alt="Colors Image" className="center-image" />
          <div className="image-text">
            <h3 style={{ color: 'black', textAlign: 'center' }}>"As a student who's always looking for the best way to study for 
            classes, I found StudyPilot to be a fantastic solution among available options."</h3>
            <h5>Anthony Carter</h5>
            <h8>New Jersey Institute of Technology, Computer Science '25</h8>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
