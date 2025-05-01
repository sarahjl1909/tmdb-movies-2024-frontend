import "./index.css";
import { GiClapperboard } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoSection">
        <GiClapperboard className="logo" />
        <span className="siteName">Movies 2024</span>
      </div>

      <ul className="navLinks">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className="link">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
