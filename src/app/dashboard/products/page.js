import ProductsList from '@/components/dashboard/products/ProductList'
import Title from '@/elements/Title'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto md:px-6 px-4 py-10 min-h-screen">
      <div className="text-center mb-4">
        <Title>Products</Title>
      </div>
      <ProductsList />
    </div>
  )
}

export default page
