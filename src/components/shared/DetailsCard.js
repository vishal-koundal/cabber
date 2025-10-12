'use client';

import React, { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import config from '../../utils/config';

function ImageItem({ item, onImageClick }) {
  return (
    <div>
      <li className="mt-4 border border-gray-200 p-1 rounded-md cursor-pointer hover:border-brand transition-colors">
        <Image
          alt="Gallery item"
          className="h-12 w-16 rounded-md object-cover"
          src={item}
          height="65"
          width="90"
          objectFit="cover"
          onClick={() => onImageClick(item)}
        />
      </li>
    </div>
  );
}

function DetailsCard({
  type = 'car', // 'car' or 'blog'
  data = {
    name: 'Sample Title',
    price: 400,
    featureImage:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    details: null,
    category: 'Luxury',
    passengers: 4,
    fuel: 'Petrol',
    author: 'John Doe',
    publishDate: '2024-01-15',
    readTime: '5 min read',
    tags: ['Car Rental', 'Luxury', 'Travel'],
  },
}) {
  const [image, setImage] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (data && data.images && data.images.length > 0) {
      setImage(data.images[0]);
      setSelectedImage(data.images[0]);
    } else if (data?.featureImage) {
      setImage(data.featureImage);
      setSelectedImage(data.featureImage);
    }
  }, [data]);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleBookNow = () => {
    // Handle booking logic
    console.log('Booking:', data.name);
  };

  const handleReadMore = () => {
    // Handle read more logic
    console.log('Read more:', data.name);
  };

  return (
    <div className="py-6">
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid gap-12 lg:grid-cols-4 lg:items-start">
            {/* Main Image and Gallery */}
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt={data.name}
                    height={400}
                    width={700}
                    layout="responsive"
                    className="rounded-lg shadow-lg"
                  />
                )}
              </div>

              {/* Image Gallery */}
              {data.images && data.images.length > 1 && (
                <ul className="mt-4 flex gap-4 overflow-x-auto pb-2">
                  {data.images.map((item, index) => (
                    <div key={index}>
                      <ImageItem item={item} onImageClick={handleImageClick} />
                    </div>
                  ))}
                </ul>
              )}
            </div>

            {/* Details Sidebar */}
            <div className="lg:sticky lg:top-0">
              <div className="space-y-4 lg:pt-10">
                <h1 className="text-2xl font-semibold lg:text-3xl text-brand">
                  {data.name}
                </h1>

                {/* Price for cars */}
                {type === 'car' && (
                  <div className="flex items-center">
                    <span className="text-gray-600">Base Price</span>
                    <p className="text-xl ml-2 font-bold text-brand">
                      {config.currency} {data.price}
                    </p>
                  </div>
                )}

                {/* Blog metadata */}
                {type === 'blog' && (
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-semibold mr-2">Author:</span>
                      <span>{data.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-semibold mr-2">Published:</span>
                      <span>
                        {new Date(data.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-semibold mr-2">Read Time:</span>
                      <span>{data.readTime}</span>
                    </div>
                  </div>
                )}

                {/* Car specifications */}
                {type === 'car' && (
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <span className="font-semibold mr-3 text-gray-700">
                        Category:
                      </span>
                      <span className="text-gray-600">{data.category}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-semibold mr-3 text-gray-700">
                        Passengers:
                      </span>
                      <span className="text-gray-600">{data.passengers}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-semibold mr-3 text-gray-700">
                        Fuel:
                      </span>
                      <span className="text-gray-600">{data.fuel}</span>
                    </div>
                  </div>
                )}

                {/* Tags for blog */}
                {type === 'blog' && data.tags && (
                  <div className="flex flex-wrap gap-2">
                    {data.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand/10 text-brand text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Button */}
                <div className="pt-6">
                  {type === 'car' ? (
                    <Link href="/create-booking">
                      <button
                        type="button"
                        className="w-full rounded bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand/90 transition-colors"
                        onClick={handleBookNow}
                      >
                        Book Now
                      </button>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="w-full rounded bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand/90 transition-colors"
                      onClick={handleReadMore}
                    >
                      Read More
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-3">
              <div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
                {data.details ? (
                  <PortableText value={data.details} />
                ) : (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-brand mb-4">
                      {type === 'car' ? 'Car Description' : 'Article Content'}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {type === 'car'
                        ? 'Experience the ultimate in luxury and comfort with our premium car rental service. This vehicle combines cutting-edge technology with elegant design to provide you with an unforgettable driving experience. Perfect for business trips, special occasions, or simply treating yourself to the finer things in life.'
                        : 'This is a comprehensive article covering various aspects of the topic. The content provides valuable insights and information that will help readers understand the subject matter better. Our detailed analysis and expert opinions make this a must-read for anyone interested in this field.'}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {type === 'car'
                        ? 'Our fleet consists of the latest models with advanced safety features, premium interiors, and exceptional performance. Each vehicle is meticulously maintained and regularly serviced to ensure your safety and comfort throughout your journey.'
                        : 'We continue to explore the topic in greater depth, providing additional context and examples that illustrate the key points. This section offers practical advice and actionable insights that readers can apply in their own situations.'}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {type === 'car'
                        ? 'Book your dream car today and enjoy the convenience of our professional service, competitive pricing, and flexible rental terms. We are committed to making your car rental experience as smooth and enjoyable as possible.'
                        : 'In conclusion, this article has covered the essential aspects of the topic, providing readers with a comprehensive understanding of the subject matter. We hope this information proves valuable and helps you make informed decisions.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailsCard;
