import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { sanityImageUrl, urlFor } from '../../../lib/sanity';
import config from '@/utils/config';

const CarItem = ({ car }) => {
  if (!car) return null;

  return (
    <Link href={`/car/${car.slug?.current || car._id}`}>
      <div className="delay-70 duration-500 ease-in-out hover:-translate-y-2 border border-borderLight group hover:border-brand rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
        <div className="pt-4 sm:pt-6 px-4 sm:px-6 pb-4">
          <h2 className="text-lg sm:text-xl text-brand font-semibold">
            {car.name}
          </h2>
          <p className="text-grayDark text-sm font-light mt-2 line-clamp-2">
            {car.description}
          </p>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="text-base sm:text-lg font-semibold text-green-600">
              {config.currency}
              {car.basePrice}
              <span className="text-xs sm:text-sm font-light text-grayDark">
                /Base Price
              </span>
            </span>
            <span
              className={`px-2 py-1 rounded text-xs w-fit ${
                true ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              Available
              {/* {car.availability ? 'Available' : 'Unavailable'} */}
            </span>
          </div>
        </div>
        <div className="relative">
          {car.featureImage ? (
            <Image
              src={sanityImageUrl({ source: car.featureImage })}
              alt={car.name}
              width={500}
              height={270}
              className="object-cover w-full h-48 sm:h-64"
            />
          ) : (
            <div className="w-full h-48 sm:h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">No image available</span>
            </div>
          )}
          <div className="flex items-center absolute bottom-3 sm:bottom-5 left-3 sm:left-5">
            <div className="bg-white rounded-full h-8 w-8 sm:h-10 sm:w-10 bg-borderLight flex items-center justify-center shadow-sm">
              <Image
                src="/icons/group.png"
                width={16}
                height={16}
                alt="Passengers"
                className="sm:w-5 sm:h-5"
              />
            </div>
            <span className="text-white ml-2 sm:ml-3 text-xs sm:text-sm font-medium">
              Passengers {car.seats || 4}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
