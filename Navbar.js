import React, { useState, Component } from 'react'
import "./Navbar.css"
import { Route, Link, NavLink} from "react-router-dom"

  
const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className='login'></i>
          </div>

          <ul className= {click? "nav-menu active": "nav-menu"}>
            <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
            <li><NavLink to='/about' onClick={closeMobileMenu}>About</NavLink></li>
            <li><Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
            <li><Link to='/accommodation' onClick={closeMobileMenu}>Accommodation</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>

          <div className='login-area flex'>
            <li>
              <Link to='/sign-in'>
                <i className='login'> Sign In </i>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <i className='login'> Register </i>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <button className='primary-btn'>Request A Quote</button>
              </Link>
              </li>
            
          </div>
          
        </div>
      </nav>

      
      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img src="https://nearmetrade.com/local/public/vendor/srivariiii.png" alt="" width="350" height="75"></img>
          </div>

          <div className='contact flex_space'>
            <div className='box flex_space'>
              <div className='icons'>
                <i className='fas fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>info@srivaarinetworks.com</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i className='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'> +011 123 4567</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i className='far fa-clock'></i>
              </div>
            </div>
            <div className='text'>
              <h4>Working Hours</h4>
                <Link to='/contact'>Monday - Saturday 9.00AM to 6.00PM </Link>
            </div>
          </div>
        </div>  
      </header>
      
    </>
  )
}

export default Navbar