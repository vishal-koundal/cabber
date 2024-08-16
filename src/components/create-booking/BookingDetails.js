import Button from '@/elements/Button';
import config from '@/utils/config';
import React from 'react';

const BookingDetails = () => {
  return (
    <div className="border rounded-lg mt-10 py-1">
      <div className="px-5 space-y-3 border-b py-4">
        <h3 className="text-lg font-semibold">Car Details</h3>
        <div className="space-y-3 text-xs ">
          <div className="flex items-center justify-between ">
            <span>Name</span>
            <span>Car Name</span>
          </div>
          <div className="flex items-center justify-between ">
            <span>Seats</span>
            <span>5</span>
          </div>
          <div className="flex items-center justify-between ">
            <span>Fuel</span>
            <span>Petrol</span>
          </div>{' '}
        </div>
      </div>
      <div className="px-5 space-y-3 border-b py-4">
        <h3 className="text-lg font-semibold">Fare Details</h3>
        <div className="space-y-3 text-xs ">
          <div className="flex items-center justify-between ">
            <span>Base fare</span>
            <span>{config.currency} 11834</span>
          </div>
          <div className="flex items-center justify-between ">
            <span>Doorstep delivery & pickup</span>
            <span>{config.currency} 500</span>
          </div>
          <div className="flex items-center justify-between ">
            <span>Insurance & GST</span>
            <span>{config.currency} 1800</span>
          </div>
          <div className="flex items-center justify-between font-bold">
            <span className="">Total</span>
            <span>{config.currency} 16000</span>
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
        <div className="pt-4 text-center">
          <Button size="large" variant="black">
            Continue
          </Button>
        </div>
      </div>{' '}
    </div>
  );
};

export default BookingDetails;
