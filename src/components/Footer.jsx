import React from 'react'
import './styles/Footer.css'
import { AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
export const Footer = () => {
  return (
    <div className='footer'>
<div className='socialMedia'>
    <AiOutlineTwitter/><AiOutlineWhatsApp/>
    <BsFacebook/>
</div>
<p>&copy:2023 pizzahut.com</p>
    </div>
  )
}
