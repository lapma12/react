import React, { useState, useEffect } from 'react';
import '../Styles/Footer.css';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkScrollPosition = () => {
            const isAtBottom = window.innerHeight + 100 + window.scrollY >= document.body.offsetHeight;
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

                <div className="footer-menu">
                    <a href="/">Home</a>
                    <a href="/about">Blog</a>
                    <a href="/register">Register</a>
                    <a href="/scoreboard">Scoreboard</a>
                </div>

                <div className="footer-social">
                    <a href="https://www.instagram.com" target='_self'>Instagram</a>
                    <a href="https://www.facebook.com" target='_self'>Facebook</a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
