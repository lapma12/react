import '../Styles/Footer.css';
import footerImg from "../Img/footerImg.png"

const Footer = () => {
    return (
    <footer className="footer">
        <img src={footerImg} alt='footerImage' className='footerImg'/>
        <div className="footer-content">
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <p>&copy; 2025 CastL. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
);

};

export default Footer;
