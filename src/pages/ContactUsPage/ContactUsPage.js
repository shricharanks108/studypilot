import './ContactUsPage.css';
import Button from 'react-bootstrap/Button'; // Import Button component from react-bootstrap

function ContactUs() {
  return (
    <div className="container">
      <div className="contact-form-container">
        <h1></h1>
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <Button variant="primary">Send</Button> {/* Use the Button component */}
          <p> </p>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
