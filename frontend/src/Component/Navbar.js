import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setMenuOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
    setMenuOpen(false);
  };
  return (
    <header className="navbar">
      <div className="left">
        <h3>CastL</h3>
      </div>

      <nav ref={navRef} className="center">
        <Link to="/" onClick={closeNavbar}>Home</Link>
        <Link to="/about" onClick={closeNavbar}>About</Link>
        <Link to="/scoreboard" onClick={closeNavbar}>ScoreBoard</Link>
        <Link to="/game" onClick={closeNavbar}>Game</Link>
        <Link to="/register" onClick={closeNavbar}>Sign in</Link>
      </nav>

      <div className="right">
        <button className="nav-btn" onClick={toggleNavbar}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
