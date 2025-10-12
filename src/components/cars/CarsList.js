import React from 'react';
import CarItem from './CarItem';
import { getAllCars } from '../../../lib/sanity';

const CarsList = async () => {
  const cars = await getAllCars();

  return (
    <div className="grid container mx-auto lg:my-16 my-10 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
      {cars.map((car) => (
        <CarItem key={car._id} car={car} />
      ))}
    </div>
  );
};

export default CarsList;
