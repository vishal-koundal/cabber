'use client';

import React from 'react';
import Form from './Form';
import Title from '@/elements/Title';
import { sendTelegram } from '../../../lib/telegram';
import config from '@/utils/config';
import Swal from 'sweetalert2';

const index = () => {
  const handleSubmit = async (values) => {
    console.log('values', values);
    try {
      await sendTelegram(`
        *New Contact Form Submission at ${config.siteName}*
- Name: ${values.name}
- Email: ${values.email}
- Phone: ${values.telephone}
- Message: ${values.message}
      `);

      Swal.fire({
        title: 'Success!',
        text: 'Details submitted successfully.\n We will contact you soon. Thanks!',
        icon: 'success',
      });
    } catch (error) {
      Swal.fire({
        title: 'Something went wrong!',
        text: 'Please try again later!',
        icon: 'error',
      });
      console.error('Telegram notification failed:', error);
    }
  };
  return (
    <div className="container mx-auto px-4 md:py-24">
      <div className="text-center mb-8">
        <Title>Leave us your info</Title>
      </div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default index;
