import CarDetails from '@/components/cars/CarDetails';

import React from 'react';

const items = [1, 2, 3];

const page = () => {
  return (
    <div className="container mx-auto md:px-6 px-4 md:py-16 py-10 min-h-screen">
      <CarDetails />

      <div className="flow-root bg-light rounded-lg px-5">
        <div className="divide-y divide-white">
          {items.map((item) => (
            <details className="group py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium text-brand">
                  ID VERIFICATION
                </h2>

                <span className="relative size-5 shrink-0 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-brand text-sm font-light">
                Please keep your original or DigiLocker of Driving License
                handy. While delivering the car to you, our executive will
                verify your original or DigiLocker of Driving License and ID
                proof (same as the ones whose details were provided while making
                the booking). This verification is mandatory. In the unfortunate
                case where you cannot show these documents, we will not be able
                to handover the car to you, and it will be treated as a late
                cancellation (100% of the fare would be payable). Driving
                license printed on A4 sheet of paper (original or otherwise)
                will not be considered as a valid document. We may ask for
                additional documents for verification in some cases, e.g., local
                ID or proof of travel.
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
