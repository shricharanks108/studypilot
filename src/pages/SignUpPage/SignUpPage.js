import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css'; // Assume you create a SignUpPage.css file for styling

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [institution, setInstitution] = useState('');
    const [gradeLevel, setGradeLevel] = useState('');

    const handleSignUp = () => {
        console.log('Signing up with:', {
            email,
            username,
            password,
            confirmPassword,
            firstName,
            lastName,
            institution,
            gradeLevel
        });
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up-box">
            <h2 className="sign-in-heading">Sign Up</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Current Educational Institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Grade Level"
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value)}
                    className="input-field"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input-field"
                />
                <Link to="/dashboard">
                    <button className="sign-up-button" href='/dashboard'>
                        Sign Up
                    </button>
                </Link>
                <Link to="/login" className="sign-in-link">
                    Already have an account? Sign In
                </Link>
            </div>
        </div>
    );
};

export default SignUpPage;
