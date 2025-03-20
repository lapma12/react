import React from 'react';
import '../Styles/Footer.css';  

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2025 Your Website. All Rights Reserved.</p>
                <div className="footer-nav">
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
