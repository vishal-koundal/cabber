'use client';

import React, { useState } from 'react';
import { sendTelegram } from '@/lib/telegram';
import { formatBookingMessage } from '@/utils/telegramFormatter';
import Button from '@/elements/Button';

const TelegramTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const testTelegram = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      // Create sample booking data
      const sampleBookingData = {
        bookingType: 'cab',
        customerDetails: {
          name: 'John Doe',
          email: 'john@example.com',
          mobile: '9876543210',
          message: 'Test booking from Telegram integration',
        },
        tripDetails: {
          pickupLocation: 'Airport Terminal 1',
          dropLocation: 'Hotel Downtown',
          tripType: 'single',
        },
      };

      const message = formatBookingMessage(sampleBookingData);
      const response = await sendTelegram(message);

      setResult({
        success: true,
        message: 'Test message sent successfully!',
        response,
      });
    } catch (error) {
      setResult({
        success: false,
        message: `Error: ${error.message}`,
        error,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Telegram Integration Test</h2>

      <Button
        onClick={testTelegram}
        disabled={isLoading}
        className="w-full mb-4"
      >
        {isLoading ? 'Testing...' : 'Send Test Message'}
      </Button>

      {result && (
        <div
          className={`p-4 rounded-lg ${
            result.success
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          <h3 className="font-semibold mb-2">
            {result.success ? '✅ Success' : '❌ Error'}
          </h3>
          <p className="text-sm">{result.message}</p>
          {result.response && (
            <details className="mt-2">
              <summary className="cursor-pointer text-xs">
                Response Details
              </summary>
              <pre className="text-xs mt-2 overflow-auto">
                {JSON.stringify(result.response, null, 2)}
              </pre>
            </details>
          )}
        </div>
      )}

      <div className="mt-4 text-xs text-gray-600">
        <p>
          <strong>Note:</strong> Make sure to set up your environment variables:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>NEXT_PUBLIC_TELEGRAM_TOKEN</li>
          <li>NEXT_PUBLIC_TELEGRAM_CHAT_ID</li>
        </ul>
      </div>
    </div>
  );
};

export default TelegramTest;
