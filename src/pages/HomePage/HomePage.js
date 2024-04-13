import './HomePage.css';

function HomePage() {
  const message = "Welcome to StudyPilot";

  return (
    <div className="welcome_page">
      <div className="page-header">
        <h1 className='welcome-title' id="header">{message}</h1>
      </div>
    </div>
  );
}

export default HomePage;
