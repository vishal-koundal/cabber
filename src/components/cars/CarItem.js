import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CarItem = () => {
  return (
    <Link href={`/car/4364`}>
      <div className=" delay-70 duration-500 ease-in-out hover:-translate-y-2 border border-borderLight group hover:border-brand rounded-lg overflow-hidden ">
        <div className="pt-6 px-6 pb-4">
          <h2 className="text-xl text-brand">BMW 7 Series Sedan</h2>
          <p className="text-grayDark text-sm font-light mt-2">
            Lorem ipsum doler sit amit is the dummy text for testing
          </p>
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={270}
            className=""
          />
          <div className="flex items-center absolute bottom-5 left-5">
            <div className="bg-white rounded-full h-10 w-10 bg-borderLight flex items-center justify-center">
              <Image src="/icons/group.png" width={20} height={20} />
            </div>
            <span className="text-white ml-3">Passengers 4</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarItem;
