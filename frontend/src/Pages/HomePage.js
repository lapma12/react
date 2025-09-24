import { Link } from "react-router-dom";
import "../Styles/Main.css";

const Homepage = () => {
    return (
        <div className="main-content">
            <h1 className="homepage-title">Welcome to Castl Website!</h1>
            <p className="homepage-description">
                Explore our latest blog posts, check the scoreboard, or sign up to join the community!
            </p>

            <Link to="/register">
                <button className="get-started-btn">
                    Get Started
                </button>
            </Link>

            <div className="card-container">
                <div className="card">
                    <h2 className="card-title">About us</h2>
                    <p className="card-description">Read the latest articles and updates.</p>
                    <Link to="/blog">
                        <button className="card-btn">
                            About
                        </button>
                    </Link>
                </div>

                <div className="card">
                    <h2 className="card-title">Scoreboard</h2>
                    <p className="card-description">See the top players and their scores.</p>
                    <Link to="/scoreboard">
                        <button className="card-btn">
                            View Scores
                        </button>
                    </Link>
                </div>

                <div className="card">
                    <h2 className="card-title">Join Us</h2>
                    <p className="card-description">Create an account and start your journey.</p>
                    <Link to="/register">
                        <button className="card-btn">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
