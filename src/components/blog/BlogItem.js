import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import ArrowUp from '../../../public/icons/ArrowUp';
import { sanityImageUrl } from '../../../lib/sanity';

const BlogItem = ({ blog }) => {
  const rawDate = blog.publishedAt;
  const date = new Date(rawDate);
  // Extract day, month, and year
  const day = date.getDate(); // returns 12
  const month = date.toLocaleString('default', { month: 'long' }); // October
  const year = date.getFullYear(); // 2025
  return (
    <Link href={`/blog/${blog.slug?.current || blog._id}`} className="block">
      <div className="overflow-hidden relative group transition delay-0 duration-500 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md">
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-lg">
          {blog.image && (
            <Image
              src={sanityImageUrl({
                source: blog.image,
                width: 400,
                height: 250,
              })}
              alt={blog.title}
              fill
              className="object-cover rounded-lg transition ease-in-out delay-0 duration-500 group-hover:scale-[1.15] overflow-hidden"
            />
          )}
          <div className="bg-black/10 group-hover:bg-gradient-to-t group-hover:from-[#5046e580] from-0% group-hover:to-#5046e530 to-100% absolute inset-0 pl-4 sm:pl-6 pt-4 sm:pt-5 text-white rounded-lg">
            <time className="" dateTime={rawDate}>
              <span className="text-3xl sm:text-4xl lg:text-5xl">{day}.</span>
              <br />{' '}
              <span className="text-sm sm:text-base">
                {month}, {year}
              </span>
            </time>
          </div>
        </div>
        <div className="pt-4 sm:pt-5 px-4 sm:px-6 pb-4">
          <h2 className="text-base sm:text-lg text-brand mt-2 font-semibold line-clamp-2">
            {blog.title}
          </h2>
          <p className="text-brand text-sm font-light mt-2 line-clamp-2">
            {blog.subtitle}
          </p>
          {blog.keywords && blog.keywords.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {blog.keywords.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {blog.keywords.length > 3 && (
                <span className="text-gray-500 text-xs">
                  +{blog.keywords.length - 3} more
                </span>
              )}
            </div>
          )}
          <Link
            href={`/blog/${blog.slug?.current || blog._id}`}
            className="border border-brand h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center mt-4 sm:mt-5 hover:bg-brand hover:text-white transition-colors"
          >
            <ArrowUp />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
