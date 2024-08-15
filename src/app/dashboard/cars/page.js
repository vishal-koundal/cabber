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
    <div className="container mx-auto md:px-6 px-4 py-10 min-h-screen">
      <div className="flex justify-between mb-4">
        <Title>Products</Title>
        <Button href="/dashboard/add-car" size="large">
          Add Car
        </Button>
      </div>
      <div className="flex gap-4 justify-end">
        <InputField placeholder="Search.." />
        <SelectInput options={options} />
      </div>
      <ProductsList />
    </div>
  );
};

export default page;
