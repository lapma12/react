import { Link } from "react-router-dom";
import "../Styles/Main.css";
//import castlLogo from "../Img/castl-log.png" // ide tedd az elkészült logót

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <img src="" alt="CastL Logo" className="homepage-logo" />
        <h1 className="homepage-title">Welcome to <span>CastL</span>!</h1>
        <p className="homepage-description">
          Explore our world, join the adventure, and become part of the CastL community.
        </p>

        <hr className="homepage-divider" />

        <div className="homepage-buttons">
          <a
            href="/assets/your-game.zip"
            className="homepage-btn download-btn"
            download
          >
            🎮 Download the Game
          </a>

          <Link to="/register">
            <button className="homepage-btn start-btn">
              🏰 Get Started
            </button>
          </Link>
        </div>

        <p className="player-count">
          Player count: <span id="playerCount">—</span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
