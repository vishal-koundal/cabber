import config from '@/utils/config';
import Image from 'next/image';
import React from 'react';
// import imageUrlBuilder from '@sanity/image-url'
// import sanityClient from '../../utils/sanityClient'

// const builder = imageUrlBuilder(sanityClient)

// function urlFor(source) {
//   return builder.image(source)
// }
function OrderItem({ item }) {
  // const [quantity, setQuantity] = useState(item.quantity || 1)
  // const updateItem = useStoreActions((actions) => actions.cart.update)

  return (
    <div className="flex flex-col sm:flex-row gap-3 text-brand items-start sm:items-center hover:bg-gray-100 -mx-4 sm:-mx-6 px-3 sm:px-6 py-3 sm:py-5">
      <div className="flex w-full sm:w-6/12">
        <div className="w-16 sm:w-20 rounded overflow-hidden flex-shrink-0">
          <Image
            src={
              'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={item.name}
            width={75}
            height={60}
            className="rounded object-cover w-full h-12 sm:h-16"
          />
        </div>
        <div className="flex flex-col justify-between ml-3 sm:ml-4 flex-grow">
          <span className="font-semibold text-sm sm:text-base">
            {item.name || 'Car name'}
          </span>
          <span className="text-grayDark text-xs sm:text-sm my-1.5">
            {item.description || ''}
          </span>
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-2/12">
        <h3 className="font-semibold text-sm sm:text-base">
          {item.name || 'Customer name'}
        </h3>
      </div>
      <span className="text-primary text-center w-full sm:w-2/12 font-semibold text-sm sm:text-base">
        {config.currency} {item.price || '10,000'}
      </span>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 text-xs sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="-ms-1 me-1.5 h-3 w-3 sm:h-4 sm:w-4"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="whitespace-nowrap">Paid</p>
        </span>
        <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 text-xs sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="-ms-1 me-1.5 h-3 w-3 sm:h-4 sm:w-4"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="whitespace-nowrap">Complete</p>
        </span>
      </div>
    </div>
  );
}

export default OrderItem;
