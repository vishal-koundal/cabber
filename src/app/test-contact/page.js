'use client';

import ContactTest from '@/components/test/ContactTest';
import Title from '@/elements/Title';

const TestContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Title>Contact Form Integration Test</Title>
        <p className="text-gray-600 mt-2">
          Test the contact form submission with Sanity CMS and Telegram
          notifications
        </p>
      </div>

      <ContactTest />
    </div>
  );
};

export default TestContactPage;
