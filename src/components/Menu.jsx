import React from 'react'
import { MenuList } from './helper/MenuList'
import MenuItem from './MenuItem'
import "./styles/Menu.css"
export const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>This is our menu</h1>
<div className='menuList'>
{
    MenuList.map((menuItem,index)=>{
        return <MenuItem key={index}image = {menuItem.image} price = {menuItem.price} name = {menuItem.name}/>
    })
}
</div>
    </div>
  )
}
