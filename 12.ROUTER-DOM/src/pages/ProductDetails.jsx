import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import Product from '../components/Products'

function ProductDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>Ürün Detayları</h1>
            <hr />
            {
                products.filter(product => product.id === Number(id)).map(product => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductDetails
