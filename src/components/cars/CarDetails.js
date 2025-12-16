'use client';

import React, { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { sanityImageUrl } from '../../../lib/sanity';

import config from '../../utils/config';
import Link from 'next/link';

const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-600 leading-relaxed mb-5">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-gray-600">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

function ImageItem({ item, isActive, onClick }) {
  const imageUrl = sanityImageUrl({ source: item, width: 100, height: 80 });

  return (
    <div
      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
        isActive
          ? 'border-blue-500 shadow-md'
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Car thumbnail"
          width={100}
          height={80}
          className="object-cover w-full h-20"
        />
      ) : (
        <div className="w-full h-20 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-xs">No Image</span>
        </div>
      )}
    </div>
  );
}

function CarDetails({ car }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (car?.images && car.images.length > 0) {
      setSelectedImage(car.images[0]);
    } else if (car?.featureImage) {
      setSelectedImage(car.featureImage);
    }
  }, [car]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const getSelectedImageUrl = () => {
    if (!selectedImage) return null;
    return sanityImageUrl({ source: selectedImage, width: 800, height: 600 });
  };

  const bookCar = () => {};

  if (!car) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Car Not Found
          </h2>
          <p className="text-gray-500">The requested car could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Car Images Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden bg-gray-100">
                {getSelectedImageUrl() ? (
                  <Image
                    src={getSelectedImageUrl()}
                    alt={car.title || car.name || 'Car image'}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                      No Image Available
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {car.images && car.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {car.images.map((image, index) => (
                    <ImageItem
                      key={index}
                      item={image}
                      isActive={selectedImage === image}
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Car Information & Booking */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              {/* Car Title */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {car.title || car.name}
                </h1>
                {car.description && (
                  <p className="text-gray-500 leading-relaxed">
                    {car.description}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">Starting from</span>
                  <p className="text-3xl font-bold text-blue-600">
                    {config.currency} {car.basePrice || car.price || 'N/A'}/
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    car.availability || !car.availability
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  Available
                </div>
              </div>

              {/* Car Specifications */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {car.seats && (
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Seats</span>
                      <span className="font-medium">{car.seats}</span>
                    </div>
                  )}
                  {car.transmission && (
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">
                        Transmission
                      </span>
                      <span className="font-medium capitalize">
                        {car.transmission}
                      </span>
                    </div>
                  )}
                  {car.fuelType && (
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Fuel Type</span>
                      <span className="font-medium capitalize">
                        {car.fuelType}
                      </span>
                    </div>
                  )}
                  {car.category && (
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Category</span>
                      <span className="font-medium">
                        {car.category.title || car.category}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              {car.features && car.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Features
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature.title || feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Book Now Button */}
              <div className="pt-4">
                <Link
                  href={{
                    pathname: '/create-booking',
                    query: { car: car.slug?.current || car._id },
                  }}
                >
                  <button
                    type="button"
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                      car.availability || !car.availability
                        ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    // disabled={!car.availability}
                    onClick={bookCar}
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Car Details Content */}

        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Car Details
            </h2>

            {car.carDetails && (
              <div
                className="
    prose max-w-none prose-lg

    /* Headings */
    prose-headings:font-semibold
    prose-h2:text-3xl prose-h2:mb-4
    prose-h3:text-xl prose-h3:mb-3
    prose-h4:text-lg prose-h4:mb-2

    /* Paragraphs */
    prose-p:text-gray-600
    prose-p:leading-relaxed
    prose-p:mb-5

    /* Lists */
    prose-ul:mt-4
    prose-ul:mb-6
    prose-ul:pl-6
    prose-ol:pl-6
    prose-li:mb-2
    prose-li:marker:text-gray-400

    /* Text styles */
    prose-strong:text-gray-900
    prose-strong:font-semibold
    prose-em:italic

    /* Divider */
    prose-hr:my-8

    /* Media */
    [&>iframe]:mt-6
    [&>iframe]:aspect-video
    [&>iframe]:w-full
    [&>iframe]:rounded-xl
  "
              >
                <PortableText
                  value={car.carDetails}
                  components={portableTextComponents}
                />
              </div>
            )}
            {car.keywords && car.keywords.length > 0 && (
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Tags
                </h4>

                <div className="flex flex-wrap gap-2">
                  {car.keywords.map((tag, index) => (
                    <span
                      key={index}
                      className="
            inline-flex items-center
            rounded-full
            bg-gray-100
            px-3 py-1
            text-xs font-medium
            text-gray-700
            hover:bg-gray-200
            transition
          "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
