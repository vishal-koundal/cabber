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
    <div className="flex gap-3 text-brand items-center hover:bg-gray-100 md:-mx-6 -mx-4 md:px-6 px-3 md:py-5 py-3">
      <div className="md:flex w-6/12">
        <div className="md:w-20 w-9 md:rounded-none rounded overflow-hidden">
          <Image
            src={
              'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={item.name}
            width={75}
            height={60}
            className="rounded"
          />
        </div>
        <div className="flex flex-col justify-between md:ml-4 flex-grow">
          <span className="font-semibold md:text-sm text-xs">
            {item.name || 'Car name'}
          </span>
          <span className="text-grayDark md:text-xs text-[10px] my-1.5">
            {item.description || 'Lorem ipsum doler sit amit'}
          </span>
        </div>
      </div>
      <div className="flex justify-center w-2/12">
        <h3 className="font-semibold md:text-sm text-xs">
          {item.name || 'Customer name'}
        </h3>
      </div>
      <span className="text-primary text-center w-2/12 font-semibold md:text-sm text-[10px]">
        {config.currency} {item.price || '10,000'}
      </span>
      <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p className="whitespace-nowrap text-sm">Paid</p>
      </span>
      <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="-ms-1 me-1.5 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p className="whitespace-nowrap text-sm">Complete</p>
      </span>
    </div>
  );
}

export default OrderItem;
