import './HomePage.css';
import logo from './book.svg';

function HomePage() {
  return (
    <div className="welcome_page" style={{ textAlign: 'center' }}>
      <h1 className='Welcome'>introducing StudyPilot</h1>
      <img
        alt=""
        src={logo}
        width="700"
        height="500"
        className="book"
      />
      <p className="plans">Flexible plans that fit your needs</p>
      <p className="why">Why StudyPilot?</p>
    </div>
  );
}

export default HomePage;
