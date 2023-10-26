import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="media-div">
        <Link to="/">
          <img
            src="https://i.ibb.co/z6k4GP8/Union-625-2x.png"
            alt="logo"
            className="logo"
          />
        </Link>
        {isOpen ? (
          <i
            class="fa-solid fa-xmark menu"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-bars menu"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        )}
      </div>
      <div className={`options ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/tv-shows">TV Show</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
          <li>
            <NavLink to="/more">More</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/join-us">Join Us</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
