import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.querySelector('.bg');
            if (parallax) {
                let scrollPosition = window.pageYOffset;
                parallax.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="page">
            <nav className="navbar">
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src="logo.png" alt="CVify Logo" className="logo" />
                    </div>
                    <div className="nav-links">
                        <button className="button nav-button" onClick={() => navigate('/templates')}>
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            <header className="header bg">
                <div className="logo-box">
                    <img src="logo.png" alt="CVify Logo" className="header-logo" />
                </div>
                <h1 className="title">
                    <span>Generate</span>
                    <span>Your</span>
                    <span>Perfect</span>
                    <span>CV</span>
                </h1>
                <p className="subtitle">
                    Build a great CV in minutes with CVify's easy templates.
                </p>
                <button className="button" onClick={() => navigate('/templates')}>
                    Start Now
                </button>
            </header>

            <section className="features">
                <h2 className="section-title">Why CVify?</h2>
                <div className="features-grid">
                    <div className="feature">
                        <h3 className="feature-title">Easy Editing</h3>
                        <p className="feature-text">Customize your CV with our simple editor.</p>
                    </div>
                    <div className="feature">
                        <h3 className="feature-title">Great Templates</h3>
                        <p className="feature-text">Pick from clean, professional templates.</p>
                    </div>
                    <div className="feature">
                        <h3 className="feature-title">Fast Download</h3>
                        <p className="feature-text">Get your CV as a PDF in one click.</p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        
                        <span className="footer-title">CVify</span>
                    </div>
                    <p className="footer-text">&copy; 2025 CVify. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;