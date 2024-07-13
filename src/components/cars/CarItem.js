import Image from 'next/image'
import React from 'react'

const CarItem = () => {
  return (
    <div className="border border-borderLight hover:border-brand rounded-lg overflow-hidden transition-all duration-300">
      <div className="py-6 px-6">
        <h2 className="text-xl text-brand">BMW 7 Series Sedan</h2>
        <p className="text-grayDark text-sm font-light mt-2">
          Lorem ipsum doler sit amit is the dummy text for testing dummy text
          for testing
        </p>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={500}
        height={280}
      />
    </div>
  )
}

export default CarItem
