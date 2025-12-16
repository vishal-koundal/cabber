import Title from '@/elements/Title';
import React from 'react';
import ServiceItem from './ServiceItem';
import { getAllServices } from '../../../lib/sanity';

const Services = async () => {
  const services = await getAllServices(3);

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Title className="mb-3">Our Services</Title>
          <p className="text-grayDark text-base sm:text-lg">
            We provide comprehensive car rental and transportation solutions
            tailored to your needs
          </p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item) => (
            <ServiceItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
