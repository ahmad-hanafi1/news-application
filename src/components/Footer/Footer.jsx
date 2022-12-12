import React from 'react';
import "./footer.css"
const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer-titles'>
                <p className='footer-title'>Advertisement</p>
                <p className='footer-title'>About</p>
                <p className='footer-title'>Contact</p>
                <p className='footer-title'>Terms of Use</p>
                <p className='footer-title'>Privacy Policy</p>
                <p className='footer-title'>© GNews</p>

            </div>

            <div className='footer-icons'>
            <i className="fa-brands fa-facebook footer-icon"></i>
            <i className="fa-brands fa-twitter footer-icon"></i>
            <i className="fa-brands fa-instagram footer-icon"></i>
            <i className="fa-brands fa-linkedin footer-icon"></i>
            </div>



        </footer>
    );
}

export default Footer;
