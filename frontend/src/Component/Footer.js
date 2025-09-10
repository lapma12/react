import React, { useState, useEffect } from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkScrollPosition = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            setIsVisible(isAtBottom);
        };

        window.addEventListener('scroll', checkScrollPosition);
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    return (
        <footer className={`footer ${isVisible ? 'show' : ''}`}>
            <div className="footer-content">
                <h2 className="footer-title">GameZone</h2>

                <div className="footer-columns">
                    {/* Menü oszlop */}
                    <div className="footer-column">
                        <h3>Menu</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/scoreboard">Scoreboard</a></li>
                            <li><a href="/game">Game</a></li>
                            <li><a href="/terms">ÁSZF</a></li>
                        </ul>
                    </div>

                    {/* Közösségi média oszlop */}
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </div>

                    {/* Rólunk oszlop */}
                    <div className="footer-column">
                        <h3>About GameZone</h3>
                        <p>GameZone is your go-to place for the latest gaming news, reviews, and community events. Join us today!</p>
                        <p>&copy; 2025 GameZone. All rights reserved.</p>
                    </div>

                    {/* Jogi információk oszlop */}
                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
