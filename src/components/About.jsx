import React from 'react'
import Multiplepizza from './Assets/multiplePizzas.jpeg';
import './styles/About.css'

export const About = () => {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage : `url(${Multiplepizza})`}}></div>
        <div className='aboutBottom'><h1>Made by Gunesh Munjal</h1></div>
    </div>
  )
}
