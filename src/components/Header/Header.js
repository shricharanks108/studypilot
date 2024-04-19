import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../FinalLogo1-2.png'

function Header() {
    return (
        <>
            <Navbar className="header-navbar bg-body-tertiary">
                <Container className='header-container'>
                    <Navbar.Brand href="home">
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
                            <Nav.Link className='header-text' href="/home">Home</Nav.Link>
                            <NavDropdown title={
                                <span className="header-text">Products</span>
                            } id="basic-nav-dropdown">
                                <NavDropdown.Item href="/textbook">Textbook</NavDropdown.Item>
                                <NavDropdown.Item href="/product/dashboard">Dashboard</NavDropdown.Item>
                                <NavDropdown.Item href="/product/study-guides">Study Guides</NavDropdown.Item>
                                <NavDropdown.Item href="/product/test">Quizzes & Exams</NavDropdown.Item>
                                <NavDropdown.Item href="/product/textbook">Textbook</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='header-text' href="/pricing">Pricing</Nav.Link>
                            <Nav.Link className='header-text' href="/about-us">About Us</Nav.Link>
                            <Nav.Link className='header-text' href="/contact-us">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button className='login-button' type="login" href="/login">Login</Button>
                    <Button className='login-button' type="sign-up" href="/sign-up">Sign Up</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;