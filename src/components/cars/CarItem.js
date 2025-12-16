import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { sanityImageUrl, urlFor } from '../../../lib/sanity';
import config from '@/utils/config';

const CarItem = ({ car }) => {
  if (!car) return null;

  return (
    <Link href={`/car/${car.slug?.current || car._id}`}>
      <div
        className="
        group rounded-xl overflow-hidden bg-white border borderLight
        transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1
      "
      >
        {/* Image */}
        <div className="relative rounded-t-xl overflow-hidden">
          <Image
            src={sanityImageUrl({ source: car.featureImage })}
            alt={car.name}
            width={500}
            height={270}
            className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div
            className="
            absolute inset-0
            bg-gradient-to-t from-black/40 via-black/10 to-transparent
            pointer-events-none
          "
          />

          {/* Seats Badge */}
          <div className="flex items-center absolute bottom-3 left-3">
            <div className="bg-white rounded-full h-9 w-9 flex items-center justify-center shadow">
              <Image
                src="/icons/group.png"
                width={18}
                height={18}
                alt="Passengers"
              />
            </div>
            <span className="text-white ml-2 text-xs sm:text-sm font-medium drop-shadow">
              {car.seats || 4} Seats
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-5">
          <h2 className="text-lg font-semibold text-secondary">{car.name}</h2>

          <p className="text-grayDark text-sm mt-2 line-clamp-2">
            {car.description}
          </p>

          {/* Price + Availability */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="text-primary font-normal text-lg flex items-baseline">
              {config.currency}
              {car.basePrice}
              <span className="text-xs text-grayDark ml-1">/Base Price</span>
            </span>

            <span
              className={`
                px-2 py-1 rounded text-xs w-fit
                ${
                  true
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }
              `}
            >
              Available
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
