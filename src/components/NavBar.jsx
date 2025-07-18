import { NavLink } from "react-router-dom";
import assets from "../assets/assets";
import "../style.css";

function Navbar() {
  const linkClasses = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        <img src={assets.logo} alt="brand logo" className="logo"></img>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/gallery" className={linkClasses}>
          Gallery
        </NavLink>
        <NavLink to="/services" className={linkClasses}>
          Services
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
