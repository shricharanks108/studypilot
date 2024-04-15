import React from 'react';
import './HomePage.css';
import Lottie from 'react-lottie';
import animationData from './study.json'; // Import your Lottie animation JSON file

function HomePage() {
  return (
    <div className="welcome_page" style={{ textAlign: 'center' }}>
      <h1 className='Welcome'>introducing StudyPilot</h1>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
        }}
        height={600}
        width={800}
      />
      <p className="plans">Flexible plans that fit your needs</p>
      <p className="why">Why StudyPilot?</p>
    </div>
  );
}

export default HomePage;
