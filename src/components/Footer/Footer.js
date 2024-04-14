import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
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
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Founders</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                        <Link to='/'>Privacy Policy</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact Form</Link>
                        <Link to='/'>Live Support</Link>
                        <Link to='/'>Feature Request</Link>
                        <Link to='/'>FAQ</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Products</h2>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Features</Link>
                        <Link to='/'>Pricing</Link>
                        <Link to='/'>Ambassadors</Link>
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