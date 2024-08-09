import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import ArrowUp from '../../../public/icons/ArrowUp';

const BlogItem = () => {
  return (
    <div className="overflow-hidden  relative group transition delay-0 duration-500 mb-4">
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={450}
          height={300}
          className="rounded-lg transition ease-in-out delay-0 duration-500 group-hover:scale-[1.15] overflow-hidden h-[300px]"
        />
        {/* linear-gradient(to top, #5046e5 0%, rgba(233, 84, 64, 0.3) 100%) */}
        <div className="bg-black/10 group-hover:bg-gradient-to-t group-hover:from-[#5046e580] from-0% group-hover:to-#5046e530 to-100% absolute inset-0 pl-6 pt-5 text-white rounded-lg">
          <time className="" datetime="2024-04-18T17:07:15+00:00">
            <span className="text-5xl">18.</span>
            <br /> <span className="text-base">April, 2024</span>
          </time>
        </div>
      </div>
      <div className="pt-5">
        <span className="font-semibold text-sm text-primary">Car Rent</span>
        <h2 className="text-lg text-brand mt-2 font-semibold">
          BMW 7 Series Sedan
        </h2>
        <p className="text-brand text-sm font-light mt-2">
          Lorem ipsum doler sit amit is the dummy text for testing
        </p>
        <Link
          href="/"
          className="border border-brand h-12 w-12 rounded-full flex items-center justify-center mt-5"
        >
          <ArrowUp />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
