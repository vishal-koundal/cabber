'use client';

import React, { useState } from 'react';
import Button from '@/elements/Button';

const ContactTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const testContactSubmission = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      // Create sample contact data
      const sampleContactData = {
        name: 'John Doe',
        email: 'john@example.com',
        telephone: '9876543210',
        subject: 'cabBooking',
        message: 'Test contact form submission from integration test',
      };

      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sampleContactData),
      });

      const result = await response.json();

      setResult({
        success: result.success,
        message: result.success
          ? 'Contact form test successful!'
          : 'Contact form test failed',
        response: result,
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
      <h2 className="text-xl font-bold mb-4">Contact Form Integration Test</h2>

      <Button
        onClick={testContactSubmission}
        disabled={isLoading}
        className="w-full mb-4"
      >
        {isLoading ? 'Testing...' : 'Send Test Contact'}
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
          <li>NEXT_PUBLIC_SANITY_PROJECT_ID</li>
          <li>NEXT_PUBLIC_TELEGRAM_TOKEN</li>
          <li>NEXT_PUBLIC_TELEGRAM_CHAT_ID</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactTest;
