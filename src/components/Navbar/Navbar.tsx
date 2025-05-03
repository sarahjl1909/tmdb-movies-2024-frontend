import "./index.css";
import { GiClapperboard } from "react-icons/gi";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToogle/ThemeToogle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoSection">
        <GiClapperboard className="logo" />
        <p className="siteName">Movies</p>
      </div>

      <ul className="navLinks">
        <li>
          <Link to="/" className="link">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/search" className="link">
            <p>Search Movies</p>
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            <p>About</p>
          </Link>
        </li>
        <div className="themeToggle">
          <ThemeToggle />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
