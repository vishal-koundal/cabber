'use client';

import React, { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

import config from '../../utils/config';

function ImageItem({ item }) {
  return (
    <div>
      <li className="mt-4 border border-gray-200 p-1 rounded-md">
        <Image
          alt="Art"
          className="h-12 w-16 rounded-md object-cover"
          src={item}
          height="65"
          width="90"
          objectFit="cover"
        />
      </li>
    </div>
  );
}

function CarDetails({
  car = {
    name: 'Car name here',
    price: 400,
    featureImage:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
}) {
  const [image, setImage] = useState('');

  useEffect(() => {
    if (car && car.images && car.images.length > 0) {
      // const url = urlFor(product.images[0].asset._ref).width(700).url();
      setImage(car.images[0]);
    } else if (car?.featureImage) {
      // const url = urlFor(product.featureImage.asset._ref).width(700).url();
      setImage(car.featureImage);
    }
  }, [car]);

  const bookCar = () => {};

  return (
    <div className="py-6">
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid gap-12 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                {image && (
                  <Image
                    src={image}
                    alt={car.name}
                    height={300}
                    width={500}
                    layout="responsive"
                    // objectFit="contain"
                    // className="ml-0"
                  />
                )}
              </div>

              <ul className="mt-1 flex gap-4">
                {car.images &&
                  car.images.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        // const url = urlFor(item.asset._ref).width(700).url();
                        setImage(item);
                      }}
                    >
                      <ImageItem item={item} />
                    </div>
                  ))}
              </ul>
            </div>

            <div className="lg:sticky lg:top-0">
              <form className="space-y-4 lg:pt-10">
                <h1 className="text-2xl font-semibold lg:text-3xl">
                  {car.name}
                </h1>
                <div className="flex items-center">
                  Base Price
                  <p className="text-xl ml-2">
                    {config.currency} {car.price}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex item-center text-sm">
                    <span className=" font-semibold mr-3">Category:-</span>
                    <span>Luxury</span>
                  </div>
                  <div className="flex item-center text-sm">
                    <span className=" font-semibold mr-3">Passengers:-</span>
                    <span>Luxury</span>
                  </div>
                  <div className="flex item-center text-sm">
                    <span className=" font-semibold mr-3">Fuel:-</span>
                    <span>Petrol</span>
                  </div>
                </div>
                <div className="pt-10">
                  <button
                    type="button"
                    className="w-full  rounded bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                    onClick={bookCar}
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                <PortableText value={car.details} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarDetails;
