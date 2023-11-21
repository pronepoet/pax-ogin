import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <>
    <div className="footer">


        <div className="container-fluid">
          <div className="footer-header">
            <button className="helpButton"> <span class="material-symbols-outlined">
              help</span>  FAQ & Help Center</button>
            <button className="darkModeButton"><span class="material-symbols-outlined">Dark_mode</span>Dark theme</button>
          </div>


            <div className="links">

              
              <div className="link-container">
                <div className="level1">
                  <div className="level2">
                    <p className="for-you">For You</p>

                    <nav className="nav-group-1">
                      <ul className="f-y">
                        <li className="f-y-li">
                          <a href="#" className="li-link">
                          Buy Bitcoin
                          </a>
                         </li> <br />
                        <li className="f-y-li">
                        <a href="#" className="li-link"> Buy Tether</a>
                         </li><br />
                        <li className="f-y-li">
                        <a href="#" className="li-link">Sell Bitcoin </a>
                        </li><br />
                        <li className="f-y-li">
                        <a href="#" className="li-link">Sell Tether </a></li><br />
                        <li className="f-y-li"> 
                        <a href="#" className="li-link">Become Vendor</a> </li><br />
                       <li className="f-y-li">
                       <a href="#" className="li-link">Paxful Wallet </a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
    
  )
}
