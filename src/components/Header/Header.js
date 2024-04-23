import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../FinalLogo1-2.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar className="header-navbar bg-body-tertiary">
                <Container className='header-container'>
                    <Navbar.Brand href="/studypilot/#/home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <text className='header-text'>StudyPilot</text>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='header-text' href="/studypilot/#/home">Home</Nav.Link>
                            <NavDropdown title={
                                <span className="header-text">Products</span>
                            } id="basic-nav-dropdown">
                                <NavDropdown.Item href="/studypilot/#/dashboard">Dashboard</NavDropdown.Item>
                                <NavDropdown.Item href="/studypilot/#/exams">Quizzes & Exams</NavDropdown.Item>
                                <NavDropdown.Item href="/studypilot/#/upload">Upload Textbook </NavDropdown.Item>
                                <NavDropdown.Item href="/studypilot/#/coursePage">Course Page</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='header-text' href="/studypilot/#/pricing">Pricing</Nav.Link>
                            <Nav.Link className='header-text' href="/studypilot/#/about-us">About Us</Nav.Link>
                            <Nav.Link className='header-text' href="/studypilot/#/contact-us">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to='/login'><Button className='login-button' type="login">Login</Button></Link>
                    <Link to='/sign-up'><Button className='login-button' type="sign-up">Sign Up</Button></Link>
                    
                </Container>
            </Navbar>
        </>
    );
}

export default Header;