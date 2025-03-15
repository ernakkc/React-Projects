import React from 'react'

function Product(probs){
    const {name, price} = probs // Destructuring
  return (
    <div>
      <div>Ürün Bilgileri</div>
        <br/>
        <div>Ürün Adı: {name}</div>
        <div>Ürün Fiyatı: {price}</div>
        <hr/>
    </div>
  )
}

export default Product
