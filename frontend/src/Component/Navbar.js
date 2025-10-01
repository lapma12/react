import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";

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
        <NavLink className={ ({isActive}) =>
          isActive ? "active" : ""} to="/" onClick={closeNavbar}>
          Home
        </NavLink>
        <NavLink className={ ({isActive}) =>
          isActive ? "active" : ""} to="/about" onClick={closeNavbar}>
          About
        </NavLink>
        <NavLink className={ ({isActive}) =>
          isActive ? "active" : ""} to="/scoreboard" onClick={closeNavbar}>
          ScoreBoard
        </NavLink>
        <NavLink className={ ({isActive}) =>
          isActive ? "active" : ""} to="/game" onClick={closeNavbar}>
          Game
        </NavLink>
        <NavLink className={ ({isActive}) =>
          isActive ? "active" : ""} to="/login" onClick={closeNavbar}>
          Sign in
        </NavLink>
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
