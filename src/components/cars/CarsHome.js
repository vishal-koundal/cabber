import Link from 'next/link';
import React from 'react';
import ArrowUp from '../../../public/icons/ArrowUp';
import Title from '@/elements/Title';
import CarItem from './CarItem';
import { getFeaturedCars } from '../../../lib/sanity';

const CarsHome = async () => {
  const cars = await getFeaturedCars();
  // const featuredCars = cars.slice(0, 3); // Get first 3 cars
  // console.log('cars', cars);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Title className="mb-2">Our Featured Cars</Title>
            <p className="text-gray-600">
              Discover our premium collection of luxury vehicles
            </p>
          </div>
          <Link
            href="/cars"
            className="flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors group"
          >
            View All
            <ArrowUp className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {cars.map((car) => (
            <CarItem key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsHome;
