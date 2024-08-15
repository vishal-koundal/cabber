import Button from '@/elements/Button';
import InputField from '@/elements/InputField';
import SelectInput from '@/elements/SelectInput';
import TextAreaField from '@/elements/TextAreaField';
import UploadImageInput from '@/elements/UploadImageInput';
import React from 'react';

const CarDetailsForm = () => {
  return (
    <form action="#">
      <div className="mb-8 mt-8 max-w-sm mx-auto">
        <UploadImageInput />
      </div>
      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="sm:col-span-2">
          <InputField label="Name" placeholder="name" />
        </div>
        <div class="w-full">
          <InputField label="Brand" placeholder="Brand" />
        </div>
        <div class="w-full">
          <InputField label="Price/KM" placeholder="Price" type="number" />
        </div>
        <div>
          <SelectInput
            label="Category"
            options={[
              { value: '', label: 'Select category' },
              { value: 'cab', label: 'Cab' },
            ]}
          />
        </div>
        <div>
          <InputField
            label="Seats Available"
            type="number"
            placeholder="Ex:- 4"
          />
        </div>

        <div class="sm:col-span-2">
          <TextAreaField
            label="Description"
            rows="8"
            placeholder="Your description here"
          />
        </div>
      </div>

      <div className="mb-8 mt-6 max-w-xs">
        <label className="block text-sm font-medium leading-6 text-gray-900 mb-3">
          Add more images
        </label>
        <UploadImageInput />
      </div>
      <div className="mt-6 text-left">
        <Button variant="black" size="large">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CarDetailsForm;
