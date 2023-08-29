import React, { useState } from 'react'
import Logo from './Assets/pizzaLogo.png'
import {Link} from 'react-router-dom'; 
import './styles/Navbar.css'
import { IoIosReorder } from 'react-icons/io';


export const Navbar = () => {
  const[openLinks,setOpenLinks]=useState(false)

  const toggleNavbar = ()=>{
    setOpenLinks(!openLinks)
  }







  return (
    <div className='navbar'>
        <div className='leftSide'>
<img src = {Logo} alt='pizzalogo'/> 
<div className='hiddenLinks' id ={openLinks ?'open':'close'}>
<Link to="/">Home</Link>
<Link to ="/Login">Login</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">signup</Link>
          <Link to="/Menu">Menu</Link>
     
</div>
        </div>
        <div className='rightSide'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">contact</Link>
          <Link to="/Menu">Menu</Link>
          <button onClick={toggleNavbar}>{<IoIosReorder/>}</button>
        </div>

    </div>
  )
}
