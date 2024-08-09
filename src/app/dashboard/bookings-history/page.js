import OrdersList from '@/components/dashboard/orders-history/OrdersList';
import PageHeader from '@/components/shared/PageHeader';
import Title from '@/elements/Title';
import React from 'react';

const page = () => {
  return (
    <main className="">
      <PageHeader title="My Bookings" subtitle="Bookings history" />
      <div className="container mx-auto md:px-6 px-4 py-10 min-h-screen">
        <OrdersList />
      </div>
    </main>
  );
};

export default page;
