import React from 'react';
import Button from '@/elements/Button';

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Booking Successful!
        </h3>

        <p className="text-gray-600 mb-6">
          Thanks, we will contact you soon to confirm your booking details and
          arrange your service.
        </p>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h4 className="font-semibold text-gray-900 mb-2">
            What happens next?
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Our team will review your booking</li>
            <li>• We'll contact you within 24 hours</li>
            <li>• We'll confirm all details and pricing</li>
            <li>• Your service will be scheduled</li>
          </ul>
        </div>

        {/* Action Button */}
        <Button variant="black" onClick={onClose} className="w-full">
          Close
        </Button>
      </div>
    </div>
  );
};

export default SuccessPopup;
