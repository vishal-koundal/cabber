'use client';
import config from '@/utils/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Swal from 'sweetalert2';

function ProductItem({ item }) {
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  };
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
            {item.description || 'Lorem ipsum doler sit amit'}
          </span>
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-2/12">
        <h3 className="font-medium text-sm sm:text-base">
          {item.name || 'Car Type'}
        </h3>
      </div>

      <div className="text-brand text-center w-full sm:w-2/12 font-semibold text-sm sm:text-base flex items-center justify-center">
        <Image
          src="/icons/group.png"
          height={22}
          width={22}
          className="mr-2.5"
        />{' '}
        4
      </div>
      <span className="text-primary text-center w-full sm:w-2/12 font-semibold text-sm sm:text-base">
        {config.currency} {item.price || '3,000'}
      </span>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <Link
          href={`/dashboard/car-details?id=${item.id}`}
          className="py-2 px-3 font-medium text-primary hover:text-primary/80 duration-150 hover:bg-white rounded-lg text-center text-sm"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-white rounded-lg text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
