import React from 'react';

const SelectInput = ({ label, options, error = '', ...field }) => {
  return (
    <div>
      <div>
        <label
          htmlFor={field?.name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <select
            {...field}
            className="px-4 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
          >
            {options?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error?.length > 0 && (
        <span className="mt-1 text-red-600 text-sm italic">{error}</span>
      )}
    </div>
  );
};
export default SelectInput;
