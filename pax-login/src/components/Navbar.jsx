import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 
export const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
      <ul>
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
    </div>
  )
}
