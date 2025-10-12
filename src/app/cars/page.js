import Link from 'next/link';
// import { type SanityDocument } from 'next-sanity';
import Image from 'next/image';

import { getAllCars } from '../../../lib/sanity';
import CarItem from '@/components/cars/CarItem';

export default async function CarsPage() {
  const cars = await getAllCars();

  return (
    <main className="container mx-auto min-h-screen max-w-6xl p-8">
      <h1 className="text-4xl font-bold mb-8">Our Cars Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarItem key={car._id} car={car} />
        ))}
      </div>
      {cars.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No cars available at the moment.
          </p>
        </div>
      )}
    </main>
  );
}
