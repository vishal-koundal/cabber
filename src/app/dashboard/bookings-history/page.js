import OrdersList from '@/components/dashboard/orders-history/OrdersList';
import PageHeader from '@/components/shared/PageHeader';
import Title from '@/elements/Title';
import React from 'react';

const page = () => {
  return (
    <main className="min-h-screen">
      <PageHeader title="My Bookings" subtitle="Bookings history" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <OrdersList />
      </div>
    </main>
  );
};

export default page;
