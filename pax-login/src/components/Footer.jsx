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
                    <p>For You</p>

                    <nav>
                      <ul>
                        <li>
                        Buy Bitcoin </li> <br />
                        <li>Buy Tether</li><br />
                        <li>Sell Bitcoin </li><br />
                        <li>Sell Tether</li><br />
                        <li> Become Vendor</li><br />
                       <li>Paxful Wallet</li>
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
