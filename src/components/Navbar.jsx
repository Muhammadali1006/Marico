import React from "react";
import "./Navbar.css";
import Container from "./Container/Container";
import { Link } from "react-router-dom";
import image from "../assets/logo.png"

const Navbar = () => {  
  return (
    <div className="nav container">
        <img src={image} alt="logo" />
        <ul>
          <li>
            <Link to="/">Use_Cases</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className="btns">
          <button className="black_btn">Login</button>
          <button className="blue_btn">Sign Up</button>
        </div>
    </div>
  );
};

export default Navbar;
