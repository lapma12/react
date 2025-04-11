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
        <h1 className="game-title">Üdv a játék világában!</h1>
        <p className="game-description">
          Készen állsz, hogy belépj egy izgalmas, kihívásokkal teli univerzumba? Ebben a játékban te írod a történeted.
          Harcolj, fedezz fel, és éld át a kalandot egy teljesen új módon!
        </p>
        <p className="game-description">
          Kattints a lenti gombra, és töltsd le a játékot most — ingyenesen!
        </p>

        <a
          href="/assets/your-game.zip" // ide kerül a játékod fájlja (pl. public/assets mappába)
          className="download-button"
          download
        >
          🎮 Letöltöm a játékot
        </a>
      </motion.div>
    </div>
  );
}

export default GamePage;
