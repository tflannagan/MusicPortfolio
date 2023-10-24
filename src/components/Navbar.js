import React from "react";
import "./Navbar.css";
import Logo from "../assets/avatar.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="https://soundcloud.com/igniculus_o">
          {" "}
          <img src={Logo} />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#songs">Songs</a>
        </li>
        <li>
          <a href="#contact">Connect</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
