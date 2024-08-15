import CarDetailsForm from '@/components/cars/CarDetailsForm';

import Title from '@/elements/Title';
import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto md:px-6 px-4 md:py-16 py-10 min-h-screen">
      <div className="text-center mb-4">
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
