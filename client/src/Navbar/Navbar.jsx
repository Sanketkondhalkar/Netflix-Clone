import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="public\logo\logo.png" alt="" />
        </Link>
      </div>
      <div className="menu">
        <Link to="/signin">
          <button className="loginbutton">Sign in</button>
        </Link>
        <Link to="/register">
          <button className="loginbutton">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
