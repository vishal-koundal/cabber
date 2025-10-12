'use client';
import BookingDetails from '@/components/create-booking/BookingDetails';
import CustomerDetailsForm from '@/components/create-booking/CustomerDetailsForm';
import SuccessPopup from '@/components/create-booking/SuccessPopup';

import Title from '@/elements/Title';
import React, { useState } from 'react';

const page = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    bookingType: '', // 'self-drive' or 'cab'
    customerDetails: {},
    tripDetails: {},
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handleBookingTypeSelect = (type) => {
    setBookingData((prev) => ({ ...prev, bookingType: type }));
    setStep(2);
  };

  const handleCustomerDetailsSubmit = (details) => {
    setBookingData((prev) => ({ ...prev, customerDetails: details }));
    setStep(3);
  };

  const handleTripDetailsSubmit = (tripDetails) => {
    setBookingData((prev) => ({ ...prev, tripDetails }));
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    // Reset the form or redirect
    setStep(1);
    setBookingData({ bookingType: '', customerDetails: {}, tripDetails: {} });
  };

  return (
    <div className="container mx-auto md:px-6 px-4 md:py-16 py-10 min-h-screen">
      <div className="text-center mb-4">
        <Title>Booking Details</Title>
      </div>
      <div className="mx-auto max-w-screen-md">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 1 ? 'bg-brand text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              1
            </div>
            <div
              className={`w-16 h-1 ${step >= 2 ? 'bg-brand' : 'bg-gray-200'}`}
            ></div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 2 ? 'bg-brand text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              2
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>Booking Details</span>
            <span>Customer Details</span>
          </div>
        </div>

        <div>
          {step === 1 && (
            <BookingDetails
              onContinue={() => setStep(2)}
              onBookingTypeSelect={handleBookingTypeSelect}
            />
          )}
          {step === 2 && (
            <CustomerDetailsForm
              bookingType={bookingData.bookingType}
              onBack={() => setStep(1)}
              onSubmit={handleCustomerDetailsSubmit}
              onTripDetailsSubmit={handleTripDetailsSubmit}
            />
          )}
        </div>
      </div>

      {showSuccess && <SuccessPopup onClose={handleSuccessClose} />}
    </div>
  );
};

export default page;
