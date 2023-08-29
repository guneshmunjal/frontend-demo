import React from 'react'

 const MenuItem = ({image,name,price}) => {
  return (
    <div className='menuItem'>
<div  style={{backgroundImage : `url(${image})`}}>

</div>
<div><h1>{name}</h1></div>
<div>${price}</div>
    </div>
  )
}
export default MenuItem;