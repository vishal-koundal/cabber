import React from 'react';
import ReviewItem from './ReviewItem';
import Title from '@/elements/Title';

const Reviews = ({ settings }) => {
  const reviews = settings?.reviews || [];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <Title>Read trusted reviews from our customers</Title>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <ReviewItem key={review._key} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
