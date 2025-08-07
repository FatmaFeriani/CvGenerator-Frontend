import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <h1 className="landing-title">Generate Your CV</h1>

            <button className="start-button" onClick={() => navigate('/templates')}>
                Start Now
            </button>
        </div>
    );
};

export default LandingPage;
