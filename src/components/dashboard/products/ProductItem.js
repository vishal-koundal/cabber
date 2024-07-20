import config from '@/utils/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductItem({ item }) {
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
        <h3 className="font-medium md:text-sm text-xs">
          {item.name || 'Car Type'}
        </h3>
      </div>

      <div className="text-brand text-center w-2/12 font-semibold md:text-sm text-[10px] flex items-center">
        <Image
          src="/icons/group.png"
          height={22}
          width={22}
          className="mr-2.5"
        />{' '}
        4
      </div>
      <span className="text-primary text-center w-2/12 font-semibold md:text-sm text-[10px]">
        {config.currency} {item.price || '3,000'}
      </span>
      <Link
        href="/"
        className="py-2 px-3 font-medium text-primary hover:text-primary/80 duration-150 hover:bg-white rounded-lg"
      >
        Edit
      </Link>
      <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-white rounded-lg">
        Delete
      </button>
    </div>
  )
}

export default ProductItem
