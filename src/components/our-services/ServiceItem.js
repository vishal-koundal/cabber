import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowUp from '../../../public/icons/ArrowUp';
import { sanityImageUrl } from '../../../lib/sanity';

const ServiceItem = ({ item }) => {
  return (
    <div className="overflow-hidden relative group transition delay-0 duration-500 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={sanityImageUrl({ source: item.featureImage })}
          width={550}
          height={300}
          className="object-cover w-full h-48 sm:h-56 lg:h-64 rounded-lg transition ease-in-out delay-0 duration-500 group-hover:scale-[1.15] overflow-hidden"
        />
        <div className="bg-black/10 group-hover:bg-gradient-to-t group-hover:from-[#5046e580] from-0% group-hover:to-#5046e530 to-100% absolute inset-0 pl-4 sm:pl-6 pt-4 sm:pt-5 text-white rounded-lg"></div>
      </div>
      <div className="pt-4 sm:pt-5 px-4 sm:px-6 pb-4">
        <h2 className="text-base sm:text-lg text-brand mt-2 font-semibold">
          {item.title}
        </h2>
        <p className="text-brand text-sm font-light mt-2 line-clamp-2">
          {item.description}
        </p>
        <Link
          href="/cars"
          className="text-sm font-medium flex items-center text-primary mt-4 sm:mt-5 hover:text-primary/80 transition-colors"
        >
          Book Now
          <ArrowUp />
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
