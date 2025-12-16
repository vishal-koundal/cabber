import React from 'react';
import ReviewItem from './ReviewItem';
import Title from '@/elements/Title';

const Reviews = ({ settings }) => {
  const reviews = settings?.reviews || [];

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Title>What Our Customers Say</Title>
          <p className="text-grayDark text-sm sm:text-base mt-2">
            Real experiences from our trusted clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewItem key={review._key} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
