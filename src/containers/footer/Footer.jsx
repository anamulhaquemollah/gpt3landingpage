import React from 'react'; 

import "./footer.css"; 
import logo from "../../assets/logo.svg"; 

const Footer = () => {
  return (
    <div className='gpt__footer section__padding'>
      <div className="gpt__footer-container">
        <div className="gpt__footer-heading">
          <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
          <button className="gpt__footer-heading__button">Request Early Access</button>
        </div>
        <div className="gpt__footer-links-container">
          <div className="gpt__footer-logo">
            <img src={logo} alt="footer logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="gpt__footer-links">
            <div className="gpt__footer-link-subsection">
              <div className="footer__link-header">
                <h4>Social Media</h4>
              </div>
              <div className="footer__link">
                <ul>
                  <li>Facebook</li>
                  <li>Youtube</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
            <div className="gpt__footer-link-subsection">
              <div className="footer__link-header">
                <h4>Social Media</h4>
              </div>
              <div className="footer__link">
                <ul>
                  <li>Facebook</li>
                  <li>Youtube</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
            <div className="gpt__footer-link-subsection">
              <div className="footer__link-header">
                <h4>Social Media</h4>
              </div>
              <div className="footer__link">
                <ul>
                  <li>Facebook</li>
                  <li>Youtube</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className='trademark'>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer