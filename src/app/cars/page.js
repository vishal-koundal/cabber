import Link from 'next/link';
// import { type SanityDocument } from 'next-sanity';
import Image from 'next/image';

import { getAllCars } from '../../../lib/sanity';
import CarItem from '@/components/cars/CarItem';
import PageHeader from '@/components/shared/PageHeader';

export default async function CarsPage() {
  const cars = await getAllCars();

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Cars Collection"
        subtitle="Choose from our premium collection of luxury vehicles for your next journey"
      />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
      </div>
    </main>
  );
}
