import React from 'react'
import './css/Components.css'


function Components({sale}) {
    const {id, title, description, price, link, image} = sale
  return (
    <div className='sale'>
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{price} TL</p>
        <a href={link} target='_blank' rel='noreferrer'>Buy Now</a>
        <hr />
    </div>
  )
}

export default Components
