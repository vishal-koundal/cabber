import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowUp from '../../../public/icons/ArrowUp';
import { sanityImageUrl } from '../../../lib/sanity';

const ServiceItem = ({ item }) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-white border borderLight shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={sanityImageUrl({ source: item.featureImage })}
          width={550}
          height={300}
          alt={item.title}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-gradient-to-t from-primary/60 to-primary/20 transition-all duration-500 rounded-t-xl" />
      </div>

      {/* Content */}
      <div className="px-5 py-5">
        <h2 className="text-lg font-semibold text-secondary">{item.title}</h2>

        <p className="text-grayDark text-sm mt-2 line-clamp-2">
          {item.description}
        </p>

        <Link
          href="/cars"
          className="mt-4 inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors"
        >
          Book Now
          <ArrowUp className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
