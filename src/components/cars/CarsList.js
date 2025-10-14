import React from 'react';
import CarItem from './CarItem';
import { getAllCars } from '../../../lib/sanity';

const CarsList = async () => {
  const cars = await getAllCars();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 my-8 sm:my-12 lg:my-16">
        {cars.map((car) => (
          <CarItem key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarsList;
