import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-cont">
      <nav className="nav-left">
      <ul className='nav-start'>
        <li>
          <Link to="/">Buy</Link>
        </li>
        <li>
          <Link to="/Login">Sell</Link>
        </li>
        <li>
          <Link to="/contact">Create an Offer</Link>
        </li>
        <li>
          <Link to="/contact">Wallet</Link>
        </li>
        <li>
          <Link to="/contact">Gift Card hub</Link>
        </li>
        <li>
          <Link to="/contact">Become a Vendor</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/contact">Register</Link>
        </li>
      
      </ul>
    </nav>
    <nav className='nav-cta'>
      <ul className="nav-ul">
        <li>
          <a href="">Login</a>
        </li>
        <li>
          <a href="">Register</a>
        </li>
      </ul>
    </nav>
      </div>
        
    </div>
  )
}
