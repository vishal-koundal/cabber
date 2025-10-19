import React from 'react';

const Title = ({ children, ...props }) => {
  return (
    <h2 {...props} className="text-4xl font-medium text-brand">
      {children}
    </h2>
  );
};

export default Title;
