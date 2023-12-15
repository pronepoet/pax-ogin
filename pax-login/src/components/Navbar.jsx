import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-cont">
      <nav className="nav-left">
      <ul className='nav-start'>
        <li className="nav-li">
          <Link to="/">Buy</Link>
        </li>
        <li  className="nav-li">
          <Link to="/Login">Sell</Link>
        </li>
        <li  className="nav-li">
          <Link className="nav-offer" to="/contact">Create an Offer</Link>
        </li>
        <li  className="nav-li">
          <Link to="/contact">Wallet</Link>
        </li>
        <li  className="nav-li">
          <Link to="/contact">Gift Card hub</Link>
        </li>
        <li  className="nav-li">
          <Link to="/contact">Become a Vendor</Link>
        </li>
      </ul>
    </nav>
    <nav className='nav-cta'>
      <ul className="nav-ul">
        <div className="nac-cta">
        <a className="nav-a"href="#">Login</a>
        <a className="wbutton" href="#">Register</a>
        </div>
      </ul>
    </nav>
    </div>
    </div>
  )
}
