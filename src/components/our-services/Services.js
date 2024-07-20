import Title from '@/elements/Title'
import React from 'react'
import ServiceItem from './ServiceItem'

const services = [1, 2, 3]

const Services = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Title className="mb-6">Our Services</Title>
      </div>

      <div className="grid container  mx-auto lg:my-16 my-10 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {services.map((item) => (
          <ServiceItem key={item} />
        ))}
      </div>
    </div>
  )
}

export default Services
