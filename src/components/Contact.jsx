import React from 'react'
import PizzaLeft from './Assets/pizzaLeft.jpg'
import './styles/Contact.css'
export const Contact = () => {
  return (
    <div className="contact">
    <div
      className="leftSide"
      style={{ backgroundImage: `url(${PizzaLeft})` }}
    ></div>
    <div className="rightSide">
      <h1> Signup</h1>

      <form id="contact-form" method="POST">
        <label htmlFor="name">Full Name</label>
        <input name="name" placeholder="Enter full name..." type="text" />
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="Enter email..." type="email" />
        <label htmlFor="email">Password</label>
        <input password= "password" placeholder="Enter the password" type="password" />
     
        <button type="submit"> Send Message</button>
      </form>
    </div>
  </div>
  )
}
