import React from 'react';
import './HomePage.css'; // Make sure this path is correct
import Lottie from 'react-lottie';
import Button from 'react-bootstrap/Button';
import animationData from './2people.json';

function HomePage() {
  return (
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
        <p className="slogan">Learning takes flight</p>
        <p className="why">Why StudyPilot?</p>
        <Button className='learn-more-button' href="/about-us">Learn More</Button>
        <Button className='learn-more-button' href="/sign-up">Sign Up</Button>
      </div>
    </div>
  );
}

export default HomePage;
