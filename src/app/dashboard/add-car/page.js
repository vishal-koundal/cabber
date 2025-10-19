import CarDetailsForm from '@/components/cars/CarDetailsForm';

import Title from '@/elements/Title';
import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-16 min-h-screen">
      <div className="text-center mb-4 sm:mb-6">
        <Title>Car Details</Title>
      </div>
      <div className="mx-auto max-w-screen-md">
        <div>
          <CarDetailsForm />
        </div>
      </div>
    </div>
  );
};

export default page;
