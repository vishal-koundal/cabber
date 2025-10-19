import OrdersList from '@/components/dashboard/orders/OrdersList';
import InputField from '@/elements/InputField';
import Title from '@/elements/Title';
import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-4">
        <Title>Bookings</Title>
        <InputField placeholder="Search customer.." />
      </div>
      <OrdersList />
    </div>
  );
};

export default page;
