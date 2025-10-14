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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to book your perfect ride
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data?.map((item, index) => (
            <div key={item.id} className="text-center group">
              <div className="relative mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <Image
                    src={item.icon}
                    width={32}
                    height={32}
                    alt={item.title}
                    className="sm:w-10 sm:h-10"
                  />
                </div>
                {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div> */}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
