import Button from '@/elements/Button';
import config from '@/utils/config';
import React from 'react';

const BookingDetails = ({
  onContinue,
  onBookingTypeSelect,
  bookingType,
  car,
}) => {
  return (
    <div className="space-y-6">
      {/* Booking Type Selection */}
      <div className="border rounded-lg py-6">
        <div className="px-5 mb-6">
          <h3 className="text-lg font-semibold mb-1">Select Booking Type</h3>
          <p className="text-sm text-gray-500 mb-4">
            Choose how you want to book.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => onBookingTypeSelect('self-drive')}
              aria-pressed={bookingType === 'self-drive'}
              className={`relative p-5 border rounded-xl transition-all text-left bg-white shadow-sm hover:shadow-md ${
                bookingType === 'self-drive'
                  ? 'border-brand ring-2 ring-brand/30'
                  : 'border-gray-200 hover:border-brand/60'
              }`}
            >
              {bookingType === 'self-drive' && (
                <span className="absolute top-3 right-3 inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand text-white">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              )}
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    bookingType === 'self-drive' ? 'bg-brand/15' : 'bg-gray-50'
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-brand"
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
                  <p className="text-xs text-gray-600">
                    Rent a car & drive yourself
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onBookingTypeSelect('cab')}
              aria-pressed={bookingType === 'cab'}
              className={`relative p-5 border rounded-xl transition-all text-left bg-white shadow-sm hover:shadow-md ${
                bookingType === 'cab'
                  ? 'border-brand ring-2 ring-brand/30'
                  : 'border-gray-2 00 hover:border-brand/60'
              }`}
            >
              {bookingType === 'cab' && (
                <span className="absolute top-3 right-3 inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand text-white">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              )}
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    bookingType === 'cab' ? 'bg-brand/15' : 'bg-gray-50'
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-brand"
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
                  <p className="text-xs text-gray-600">
                    Book a cab with driver
                  </p>
                </div>
              </div>
            </button>
            <button
              onClick={() => onBookingTypeSelect('wedding')}
              aria-pressed={bookingType === 'wedding'}
              className={`relative p-5 border rounded-xl transition-all text-left bg-white shadow-sm hover:shadow-md ${
                bookingType === 'wedding'
                  ? 'border-brand ring-2 ring-brand/30'
                  : 'border-gray-200 hover:border-brand/60'
              }`}
            >
              {bookingType === 'wedding' && (
                <span className="absolute top-3 right-3 inline-flex items-center justify-center h-6 w-6 rounded-full bg-brand text-white">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              )}
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    bookingType === 'wedding' ? 'bg-brand/15' : 'bg-gray-50'
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-brand"
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
                  <h4 className="font-semibold text-gray-900">Wedding Car</h4>
                  <p className="text-xs text-gray-600">
                    Book a car for wedding
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
              <span>{car?.name || '—'}</span>
            </div>
            <div className="flex items-center justify-between ">
              <span>Seats</span>
              <span>{car?.seats ?? '—'}</span>
            </div>
            <div className="flex items-center justify-between ">
              <span>Fuel</span>
              <span>
                {car?.fuelType ? String(car.fuelType).toUpperCase() : '—'}
              </span>
            </div>
            <div className="flex items-center justify-between ">
              <span>Category</span>
              <span>
                {car?.category ? car.category.title || car.category : '—'}
              </span>
            </div>
          </div>
        </div>
        <div className="px-5 space-y-3 border-b py-4">
          <h3 className="text-lg font-semibold">Fare Details</h3>
          <div className="space-y-3 text-xs ">
            <div className="flex items-center justify-between ">
              <span>Base fare</span>
              <span>
                {config.currency} {car?.basePrice ?? 0}
              </span>
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
              <span className="">Total Base fare</span>
              <span>
                {config.currency} {(car?.basePrice || 0) + 100 + 80}
              </span>
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

      {/* Continue Button */}
      <div className="flex justify-end">
        <Button
          onClick={onContinue}
          disabled={!bookingType}
          className={!bookingType ? 'opacity-70 cursor-not-allowed' : ''}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BookingDetails;
