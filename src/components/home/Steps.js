import Image from 'next/image';
import React from 'react';

const data = [
  {
    id: '1',
    icon: '/icons/route.png',
    title: 'Create Your Route',
    description:
      'Enter your pickup & dropoff locations or the number of hours you wish to book a car and driver for',
  },
  {
    id: '2',
    icon: '/icons/car-wash.png',
    title: 'Book your chauffeur',
    description:
      'You can easily make a reservation through our website, mobile app, or by contacting our customer service team.',
  },
  {
    id: '3',
    icon: '/icons/confirm.png',
    title: 'Receive a confirmation',
    description: `Your booking is received, you'll receive a confirmation email or notification with all the details of your reservation.`,
  },
];
const Steps = () => {
  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
            How It Works
          </h2>
          <p className="text-grayDark max-w-2xl mx-auto mt-3">
            Simple steps to book your perfect ride
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((item, index) => (
            <div
              key={item.id}
              className="text-center bg-white border borderLight rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition">
                <Image
                  src={item.icon}
                  width={36}
                  height={36}
                  alt={item.title}
                  className="opacity-90"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-grayDark text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
