'use client';

import React, { useState } from 'react';
import Form from './Form';
import Title from '@/elements/Title';
import Swal from 'sweetalert2';

const index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      // Save contact to Sanity and send Telegram notification via API
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: `Details submitted successfully.\nWe will contact you soon. Thanks!`,
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        });
      } else {
        throw new Error(result.error || 'Failed to submit contact form');
      }
    } catch (error) {
      console.error('Contact submission failed:', error);
      Swal.fire({
        title: 'Something went wrong!',
        text: `Please try again later!\nError: ${error.message}`,
        icon: 'error',
        showConfirmButton: true,
        confirmButtonText: 'OK',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="container mx-auto px-4 md:py-24 py-10">
      <div className="text-center mb-8">
        <Title>Leave us your info</Title>
      </div>
      <Form onSubmit={handleSubmit} isSubmittingForm={isSubmitting} />
    </div>
  );
};

export default index;
