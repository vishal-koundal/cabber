import React from 'react';
import FaqItem from './FaqItem';
import Title from '@/elements/Title';

const faqs = [1, 2, 3, 4, 5];
const Faq = () => {
  return (
    <div className="mx-auto max-w-3xl md:my-24 my-16">
      <div className="text-center mb-8">
        <Title>Frequently Asked Questions</Title>
      </div>
      <div className="flow-root">
        <div className=" divide-y divide-gray-100">
          {faqs.map((item) => (
            <FaqItem key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
