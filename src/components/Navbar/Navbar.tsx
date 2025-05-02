import "./index.css";
import { GiClapperboard } from "react-icons/gi";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToogle/ThemeToogle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoSection">
        <GiClapperboard className="logo" />
        <span className="siteName">Movies</span>
      </div>

      <ul className="navLinks">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/search" className="link">
            Search Movies
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <ThemeToggle />
      </ul>
    </nav>
  );
}

export default Navbar;
