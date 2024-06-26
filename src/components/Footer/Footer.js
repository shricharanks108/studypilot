import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join to recieve updates and notifications about our product!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/founders'>Founders</Link>
                        <Link to='/investors'>Investors</Link>
                        <Link to='/terms-of-service'>Terms of Service</Link>
                        <Link to='/privacy-policy'>Privacy Policy</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contact-us'>Contact Form</Link>
                        <Link to='/support'>Live Support</Link>
                        <Link to='/feature-request'>Feature Request</Link>
                        <Link to='/faq'>FAQ</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Products</h2>
                        <Link to='/testemonials'>Testimonials</Link>
                        <Link to='/features'>Features</Link>
                        <Link to='/pricing'>Pricing</Link>
                        <Link to='/ambassadors-program'>Ambassadors</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='//www.instagram.com/'>Instagram</Link>
                        <Link to='//www.facebook.com/'>Facebook</Link>
                        <Link to='//www.youtube.com/'>Youtube</Link>
                        <Link to='//www.twitter.com/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/home' className='social-logo'>
                            StudyPilot
                        </Link>
                    </div>
                    <small className='website-rights'>StudyPilot © 2024</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to='//www.facebook.com/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='//www.instagram.com/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={
                                '//www.youtube.com/'
                            }
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='//www.twitter.com/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='//www.linkedin.com/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;