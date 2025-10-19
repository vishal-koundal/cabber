import ProductsList from '@/components/dashboard/products/ProductList';
import Button from '@/elements/Button';
import InputField from '@/elements/InputField';
import SelectInput from '@/elements/SelectInput';
import Title from '@/elements/Title';
import React from 'react';

const options = [
  { value: 'all', label: 'All Cars' },
  { value: 'luxury', label: 'LUXURY' },
];
const page = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-4">
        <Title>Products</Title>
        <Button href="/dashboard/add-car" size="large">
          Add Car
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
        <InputField placeholder="Search.." />
        <SelectInput options={options} />
      </div>
      <ProductsList />
    </div>
  );
};

export default page;
