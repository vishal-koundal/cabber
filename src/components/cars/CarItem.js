import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { sanityImageUrl, urlFor } from '../../../lib/sanity';
import config from '@/utils/config';

const CarItem = ({ car }) => {
  if (!car) return null;

  return (
    <Link href={`/car/${car.slug?.current || car._id}`}>
      <div className="delay-70 duration-500 ease-in-out hover:-translate-y-2 border border-borderLight group hover:border-brand rounded-lg overflow-hidden">
        <div className="pt-6 px-6 pb-4">
          <h2 className="text-xl text-brand">{car.name}</h2>
          <p className="text-grayDark text-sm font-light mt-2 line-clamp-2">
            {car.description}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-semibold text-green-600">
              {config.currency}
              {car.basePrice}
              <span className="text-sm font-light text-grayDark">
                /Base Price
              </span>
            </span>
            <span
              className={`px-2 py-1 rounded text-xs ${
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
              className="object-cover"
            />
          ) : (
            <div className="w-full h-[270px] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
          <div className="flex items-center absolute bottom-5 left-5">
            <div className="bg-white rounded-full h-10 w-10 bg-borderLight flex items-center justify-center">
              <Image
                src="/icons/group.png"
                width={20}
                height={20}
                alt="Passengers"
              />
            </div>
            <span className="text-white ml-3">Passengers {car.seats || 4}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
