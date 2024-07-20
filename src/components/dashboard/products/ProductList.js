import React from 'react'
import ProductItem from './ProductItem'

const products = [1, 2, 3, 4, 5]
const ProductsList = () => {
  return (
    <div>
      {products?.length > 0 &&
        products.map((item, i) => (
          <ProductItem key={item._id || `${i + 1}`} item={item} />
        ))}
    </div>
  )
}

export default ProductsList
