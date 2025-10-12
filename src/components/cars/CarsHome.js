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
    <div className="container mx-auto py-20 bg-light md:px-8 px-4 rounded-xl">
      <div className="flex items-center justify-between mb-10">
        <Title className="mb-6">Our Collection</Title>
        <Link href="/cars" className="flex items-center font-light text-brand">
          View All <ArrowUp />
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 ">
        {cars.map((car) => (
          <CarItem key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarsHome;
