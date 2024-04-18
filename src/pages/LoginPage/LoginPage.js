import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('Signing in with:', email, password);
    };

    return (
        <div className="sign-in-container">
            <div className="sign-in-box">
                <h2 className="sign-in-heading">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />

                <Link to="/dashboard">
                    <button className="sign-in-button" href='/dashboard' onClick={handleSignIn}>
                        Sign In
                    </button>
                </Link>
                <Link to="/sign-up">
                    <p className="sign-up-link">Don't have an account? Sign Up</p>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;