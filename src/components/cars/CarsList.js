import React from 'react'
import CarItem from './CarItem'

const cars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const CarsList = () => {
  return (
    <div className="grid container  mx-auto lg:my-16 my-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
      {cars.map((item) => (
        <CarItem key={item} />
      ))}
    </div>
  )
}

export default CarsList
