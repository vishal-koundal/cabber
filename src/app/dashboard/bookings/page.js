import OrdersList from '@/components/dashboard/orders/OrdersList';
import InputField from '@/elements/InputField';
import Title from '@/elements/Title';
import React from 'react';

const page = () => {
  return (
    <div className="container mx-auto md:px-6 px-4 py-10 min-h-screen">
      <div className="flex justify-between  mb-4">
        <Title>Bookings</Title>
        <InputField placeholder="Search customer.." />
      </div>
      <OrdersList />
    </div>
  );
};

export default page;
