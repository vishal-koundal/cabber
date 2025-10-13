'use client';
import BookingDetails from '@/components/create-booking/BookingDetails';
import CustomerDetailsForm from '@/components/create-booking/CustomerDetailsForm';
import SuccessPopup from '@/components/create-booking/SuccessPopup';

import Title from '@/elements/Title';
import React, { useState } from 'react';
import {
  formatBookingMessage,
  formatBookingConfirmationMessage,
} from '@/utils/telegramFormatter';

const page = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    bookingType: '', // 'self-drive' or 'cab'
    customerDetails: {},
    tripDetails: {},
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [telegramStatus, setTelegramStatus] = useState({
    isSending: false,
    isSent: false,
    error: null,
  });
  const [sanityStatus, setSanityStatus] = useState({
    isSaving: false,
    isSaved: false,
    error: null,
    bookingId: null,
  });

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

  const handleTripDetailsSubmit = async (tripDetails) => {
    const updatedBookingData = { ...bookingData, tripDetails };
    setBookingData(updatedBookingData);

    // Set loading states
    setTelegramStatus({ isSending: true, isSent: false, error: null });
    setSanityStatus({
      isSaving: true,
      isSaved: false,
      error: null,
      bookingId: null,
    });

    try {
      // Save booking to Sanity and send Telegram notification via API
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBookingData),
      });

      const result = await response.json();

      if (result.success) {
        setSanityStatus({
          isSaving: false,
          isSaved: true,
          error: null,
          bookingId: result.bookingId,
        });

        if (result.telegram.success) {
          setTelegramStatus({ isSending: false, isSent: true, error: null });
        } else {
          setTelegramStatus({
            isSending: false,
            isSent: false,
            error: result.telegram.error,
          });
        }
      } else {
        setSanityStatus({
          isSaving: false,
          isSaved: false,
          error: result.error,
          bookingId: null,
        });
        setTelegramStatus({
          isSending: false,
          isSent: false,
          error: 'Failed to save booking',
        });
      }
    } catch (error) {
      console.error('Booking submission failed:', error);
      setSanityStatus({
        isSaving: false,
        isSaved: false,
        error: error.message,
        bookingId: null,
      });
      setTelegramStatus({
        isSending: false,
        isSent: false,
        error: 'Network error',
      });
    }

    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    // Reset the form or redirect
    setStep(1);
    setBookingData({ bookingType: '', customerDetails: {}, tripDetails: {} });
    setTelegramStatus({ isSending: false, isSent: false, error: null });
    setSanityStatus({
      isSaving: false,
      isSaved: false,
      error: null,
      bookingId: null,
    });
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
              isSubmitting={telegramStatus.isSending}
            />
          )}
        </div>
      </div>

      {showSuccess && (
        <SuccessPopup
          onClose={handleSuccessClose}
          telegramStatus={telegramStatus}
          sanityStatus={sanityStatus}
        />
      )}
    </div>
  );
};

export default page;
