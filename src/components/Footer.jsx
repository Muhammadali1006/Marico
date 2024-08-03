import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import image from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='nav container'>
        <div>
      <img src={image} alt="logo" />
      <p>info@marico.co</p>
        </div>
      
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
    </div>
  )
}

export default Footer
