import React from 'react'
import appstore from '../Static/Images/appstore.png'
import netbanking from '../Static/Images/netbanking.png'
import mastercard from '../Static/Images/mastercard.png'
import visa from '../Static/Images/visa.png'
import cashondelivery from '../Static/Images/cashondelivery.png'
import googleplay from '../Static/Images/googleplay.png'
import amex from '../Static/Images/amex.png'

import '../Static/CSS/Footer.css'
function Footer() {
  return (
    <>
    
    <footer>
      <div className="footer-top">
        <div className="footer-feature">
          <i className="icon">🚚</i>
          <div className="feature-text">
            <h3>Free & Next Day Delivery</h3>
            <p>Lorem ipsum dolor sit amet, cons...</p>
          </div>
        </div>
        <div className="footer-feature">
          <i className="icon">🔒</i>
          <div className="feature-text">
            <h3>100% Satisfaction Guarantee</h3>
            <p>Rorem Ipsum Dolor sit amet, cons...</p>
          </div>
        </div>
        <div className="footer-feature">
          <i className="icon">💎</i>
          <div className="feature-text">
            <h3>Great Daily Deals Discount</h3>
            <p>Lorem ipsum dolor sit amet, cons...</p>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-column">
          <h2 className="footer-logo">GROCI</h2>
          <p>Food & Grocery</p>
          <p>📞 +61 525 240 310</p>
          <p>📱 12345 67890, 56847-98562</p>
          <p>✉️ yourmail@gmail.com</p>
          <p>🌐 <a href="http://www.klbtheme.com">www.klbtheme.com</a></p>
        </div>
        <div className="footer-column">
          <h3>TOP CITIES</h3>
          <ul>
            <li>New Delhi</li>
            <li>Bengaluru</li>
            <li>Hyderabad</li>
            <li>Kolkata</li>
            <li>Gurugram</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CATEGORIES</h3>
          <ul>
            <li>Vegetables</li>
            <li>Grocery & Staples</li>
            <li>Breakfast & Dairy</li>
            <li>Soft Drinks</li>
            <li>Biscuits & Cookies</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <li>Company Information</li>
            <li>Careers</li>
            <li>Store Location</li>
            <li>Affiliate Program</li>
            <li>Copyright</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Download App</h3>
          <div className="app-links">
            <img src={googleplay} alt="Google Play" />
            <img src={appstore} alt="App Store" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2022. KlbTheme. All rights reserved</p>
        <div className="payment-methods">
          <img src={amex} alt="Amex" />
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={cashondelivery} alt="Cash on Delivery" />
          <img src={netbanking} alt="Net Banking" />
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer