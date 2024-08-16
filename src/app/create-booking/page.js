'use client';
import BookingDetails from '@/components/create-booking/BookingDetails';

import Title from '@/elements/Title';
import React, { useState } from 'react';

const page = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="container mx-auto md:px-6 px-4 md:py-16 py-10 min-h-screen">
      <div className="text-center mb-4">
        <Title>Booking & Payment</Title>
      </div>
      <div className="mx-auto max-w-screen-md">
        <div>
          {step === 1 && <BookingDetails />}
          {step === 2 && 'User Details'}
          {step === 3 && 'Phone verification'}
          {step === 4 && 'Payment'}
        </div>
      </div>
    </div>
  );
};

export default page;
