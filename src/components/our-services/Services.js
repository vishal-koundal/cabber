import Title from '@/elements/Title';
import React from 'react';
import ServiceItem from './ServiceItem';
import { getAllServices } from '../../../lib/sanity';

const Services = async () => {
  const services = await getAllServices(3);
  // console.log('services', services);
  if (!services || services.length === 0) {
    return null;
  }
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <Title className="mb-4">Our Services</Title>
          <p className="text-base sm:text-lg text-gray-600">
            We provide comprehensive car rental and transportation solutions
            tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => (
            <ServiceItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
