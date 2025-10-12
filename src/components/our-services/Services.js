import Title from '@/elements/Title';
import React from 'react';
import ServiceItem from './ServiceItem';
import { getAllServices } from '../../../lib/sanity';

const Services = async () => {
  const services = await getAllServices(3);
  console.log('services', services);
  if (!services || services.length === 0) {
    return null;
  }
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Title className="mb-6">Our Services</Title>
      </div>

      <div className="grid container  mx-auto lg:my-16 my-10 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {services.map((item) => (
          <ServiceItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
