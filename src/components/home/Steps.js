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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to book your perfect ride
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {data?.map((item, index) => (
            <div key={item.id} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Image
                    src={item.icon}
                    width={40}
                    height={40}
                    alt={item.title}
                  />
                </div>
                {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div> */}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
