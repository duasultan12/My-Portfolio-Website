import React   from 'react'
import './Navbar.css'; 
import logo from '../../assests/logo.png';
import {link} from reactscroll;

const Navbar = () => {


  return (
    <div className='navbar'>
    <img src={logo} alt="" className='logo'/>
   
    <ul className='nav-menu'>
      
        <li a href='#home'>Home </li>
        <li  a href='#about'>About </li>
        <li  a href='#services' >Services </li>
        <li  a href='#portfolio' >Portfolio</li>
        <li   a href='#contact'>Contact </li>
    </ul>
   <div className='nav-connect'>
    <button className='btn1' > Connect With Me</button>
   </div>
    </div>
  )
}

export default Navbar