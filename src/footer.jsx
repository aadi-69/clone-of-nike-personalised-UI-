import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'




const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo.jpg' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>Nike. Just Do It. Nike IN ❤️</p>
                    <div className='icon'>
                    <ul className="social-icons">
  <li>
    <a href="https://www.facebook.com/nike" target="_blank" rel="noopener noreferrer">
      <RiFacebookFill />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/nike" target="_blank" rel="noopener noreferrer">
      <AiOutlineInstagram />
    </a>
  </li>
  <li>
    <a href="https://twitter.com/nike" target="_blank" rel="noopener noreferrer">
      <AiOutlineTwitter />
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com/user/nike" target="_blank" rel="noopener noreferrer">
      <BsYoutube />
    </a>
  </li>
</ul>

                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer