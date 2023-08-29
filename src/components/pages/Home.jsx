import React from 'react'
import { Link } from 'react-router-dom'
import bannerimage from "../Assets/pizza.jpeg"
import '../styles/Home.css'

export const Home = () => {
  return (
    <div className='home'   style={{backgroundImage : `url(${bannerimage})`}}>
      <div className='headerContainer' >
        <h1>PIZZA HUT</h1>
        <p>Pizza for everyone</p>
        <Link to = 'menu' >
        <button >Order Now</button>
        </Link>
      </div>
    </div>
  )
}
