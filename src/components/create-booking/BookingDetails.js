import Button from '@/elements/Button';
import config from '@/utils/config';
import React from 'react';

const BookingDetails = ({ onContinue, onBookingTypeSelect }) => {
  return (
    <div className="space-y-6">
      {/* Booking Type Selection */}
      <div className="border rounded-lg py-6">
        <div className="px-5 mb-6">
          <h3 className="text-lg font-semibold mb-4">Select Booking Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => onBookingTypeSelect('self-drive')}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-brand hover:bg-brand/5 transition-colors text-left"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Self Drive</h4>
                  <p className="text-sm text-gray-600">
                    Rent a car and drive yourself
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onBookingTypeSelect('cab')}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-brand hover:bg-brand/5 transition-colors text-left"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cab Service</h4>
                  <p className="text-sm text-gray-600">
                    Book a cab with driver
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Car Details */}
      <div className="border rounded-lg py-1">
        <div className="px-5 space-y-3 border-b py-4">
          <h3 className="text-lg font-semibold">Car Details</h3>
          <div className="space-y-3 text-xs ">
            <div className="flex items-center justify-between ">
              <span>Name</span>
              <span>BMW 7 Series Sedan</span>
            </div>
            <div className="flex items-center justify-between ">
              <span>Seats</span>
              <span>4</span>
            </div>
            <div className="flex items-center justify-between ">
              <span>Fuel</span>
              <span>Petrol</span>
            </div>
            <div className="flex items-center justify-between ">
              <span>Category</span>
              <span>Luxury</span>
            </div>
          </div>
        </div>
        <div className="px-5 space-y-3 border-b py-4">
          <h3 className="text-lg font-semibold">Fare Details</h3>
          <div className="space-y-3 text-xs ">
            <div className="flex items-center justify-between ">
              <span>Base fare</span>
              <span>{config.currency} 450</span>
            </div>
            <div className="flex items-center justify-between ">
              <span>Doorstep delivery & pickup</span>
              <span>{config.currency} 100</span>
            </div>
            <div className="flex items-center justify-between ">
              <span>Insurance & GST</span>
              <span>{config.currency} 80</span>
            </div>
            <div className="flex items-center justify-between font-bold">
              <span className="">Total</span>
              <span>{config.currency} 630</span>
            </div>
          </div>
        </div>
        <div className="px-5 space-y-3 text-xs py-4">
          <div className="flex items-center justify-between ">
            <span>Fuel</span>
            <span>Excluded</span>
          </div>
          <div className="flex items-center justify-between ">
            <span>Tolls, Parking & Inter-state taxes</span>
            <span>To be paid by you</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
