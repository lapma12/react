import { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Main.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  // A dark/light mód mentése a helyi tárolóba, hogy a választás megmaradjon frissítés után
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);


  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  return (
    <header className="navbar">
  <div className="left">
    <h3>Logo</h3>
  </div>

  <nav ref={navRef} className="center">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/scoreboard">ScoreBoard</Link>
    <Link to="/game">Game</Link>
    <Link to="/register">Sign in</Link>
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
      <FaTimes />
    </button>
  </nav>

  <div className="right">
    <button className="nav-btn" onClick={showNavbar}>
      <FaBars />
    </button>
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  </div>
</header>
  );
}

export default Navbar;
