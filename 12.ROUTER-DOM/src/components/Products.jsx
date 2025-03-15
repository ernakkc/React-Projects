import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products(product) {

    const {id, name, price} = product.product

    const navigate = useNavigate();

  return (
    <div>
        <h2>Ürün Detayı</h2>
        <p>Ürün ID: {id}</p>
        <p>Ürün Adı: {name}</p>
        <p>Ürün Fiyatı: {price}</p>
        <button onClick={() => navigate('/product-details/'+ id)}>Detayına Git</button>
        <hr />
    </div>
  )
}

export default Products
