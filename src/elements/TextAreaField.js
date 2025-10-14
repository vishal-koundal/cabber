import React from 'react';

const TextAreaField = ({ label, error = '', ...field }) => {
  return (
    <div className="w-full">
      <div>
        <label
          htmlFor={field?.name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <textarea
            {...field}
            className="px-3 sm:px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-none focus:ring-inset focus:ring-brand text-sm sm:text-sm sm:leading-6 resize-vertical min-h-[100px]"
          />
        </div>
      </div>
      {error?.length > 0 && (
        <span className="mt-1 text-red-600 text-xs sm:text-sm italic">
          {error}
        </span>
      )}
    </div>
  );
};
export default TextAreaField;
