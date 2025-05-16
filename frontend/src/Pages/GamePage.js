import { motion } from "framer-motion";
import "../Styles/Game.css"; // külön CSS fájl ehhez

function GamePage() {
  return (
    <div className="game-page">
      <motion.div
        className="game-container"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="game-title">Welcome to the World of the Game!</h1>
        <p className="game-description">
          Are you ready to enter an exciting universe full of challenges? In this game, you write your own story.
          Fight, explore, and experience the adventure in a completely new way!
        </p>
        <p className="game-description">
          Click the button below and download the game now — for free!
        </p>

        <a
          href="/assets/your-game.zip" // this is where your game file should go (e.g., into the public/assets folder)
          className="download-button"
          download
        >
          🎮 Download the Game
        </a>

      </motion.div>
    </div>
  );
}

export default GamePage;
