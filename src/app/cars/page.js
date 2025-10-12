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
      <div className="container mx-auto max-w-6xl px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
