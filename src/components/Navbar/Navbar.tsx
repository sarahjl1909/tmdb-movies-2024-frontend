import './index.css'

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">

    <div className="logoSection">
        <img src="/logo.png" alt="Logo" className="logo" /> 
        <span className="siteName">Movies 2024</span>
      </div>

      <ul className="navLinks">
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/movies" className="link">Movies</Link>
        </li>
        <li>
          <Link to="/about" className="link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="link">Contact</Link>
        </li>
      </ul>

      <div className="searchBox">
        <input type="text" placeholder='Search'/>
      </div>
    </nav>
  );
}

export default Navbar;