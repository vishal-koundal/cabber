import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-brand text-white">
      <div className="container mx-auto lg:py-24 px-4 py-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-4 sm:mb-6">
          {title}
        </h1>
        <h5 className="text-sm sm:text-base">Home &gt; {subtitle}</h5>
      </div>
    </div>
  );
};

export default PageHeader;
