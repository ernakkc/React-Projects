import React from 'react'
import Product from '../components/Products'
import { products } from '../data/products'


function Products() {
  return (
    <div>
      <h1>Products</h1>
      {
        products.map(product => (
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Products
