'use client';

import TelegramTest from '@/components/test/TelegramTest';
import Title from '@/elements/Title';

const TestTelegramPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Title>Telegram Integration Test</Title>
        <p className="text-gray-600 mt-2">
          Test the Telegram notification system for booking requests
        </p>
      </div>

      <TelegramTest />
    </div>
  );
};

export default TestTelegramPage;
