import React from 'react';
import Button from '@/elements/Button';

const SuccessPopup = ({ onClose, telegramStatus, sanityStatus }) => {
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

        <p className="text-gray-500 mb-6">
          Thanks, we will contact you soon to confirm your booking details and
          arrange your service.
        </p>

        {/* Sanity Database Status */}
        {sanityStatus && (
          <div className="bg-purple-50 rounded-lg p-4 mb-4 text-left">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
              Database Status
            </h4>
            {sanityStatus.isSaving && (
              <div className="flex items-center text-sm text-purple-600">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Saving booking...
              </div>
            )}
            {sanityStatus.isSaved && (
              <div className="flex items-center text-sm text-green-600">
                <svg
                  className="w-4 h-4 mr-2"
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
                Booking saved! ID: {sanityStatus.bookingId}
              </div>
            )}
            {sanityStatus.error && (
              <div className="flex items-center text-sm text-red-600">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Save failed: {sanityStatus.error}
              </div>
            )}
          </div>
        )}

        {/* Telegram Notification Status */}
        {telegramStatus && (
          <div className="bg-blue-50 rounded-lg p-4 mb-4 text-left">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Notification Status
            </h4>
            {telegramStatus.isSending && (
              <div className="flex items-center text-sm text-blue-600">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending notification...
              </div>
            )}
            {telegramStatus.isSent && (
              <div className="flex items-center text-sm text-green-600">
                <svg
                  className="w-4 h-4 mr-2"
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
                Notification sent successfully!
              </div>
            )}
            {telegramStatus.error && (
              <div className="flex items-center text-sm text-red-600">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Notification failed: {telegramStatus.error}
              </div>
            )}
          </div>
        )}

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h4 className="font-semibold text-gray-900 mb-2">
            What happens next?
          </h4>
          <ul className="text-sm text-gray-500 space-y-1">
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
