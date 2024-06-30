import React from 'react'
import './Footer.css';
import logo from '../../assests/logo.png';
import user from '../../assests/user.png';
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={logo} alt='' className='img-footer'/>
                <p>I'm a UI/UX Designer and Front end developer with 1 year of experience in this field.</p>
            </div>
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user} alt='' />
                    <input type="email" placeholder='Enter your email' /> 
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
            </div>
             <hr /> 
             <div className='footer-bottom'>
                <p className='footer-bottom-left'>2023 Dua Sultan. All rights reserved.</p>
             <div className='footer-bottom-right'>
                <p>Terms of Services</p>
                <p> Privacy Policy</p>
                <p>Connect with me </p>
             </div>
             </div>
        </div>
        
  )
}

export default Footer