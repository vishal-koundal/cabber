import React from 'react';
import ReviewItem from './ReviewItem';
import Title from '@/elements/Title';

const reviews = [1, 2, 3];

const Reviews = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center mb-8">
          <Title>Read trusted reviews from our customers</Title>
        </div>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {reviews.map((item) => (
            <ReviewItem key={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
