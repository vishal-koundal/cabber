import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowUp from '../../../public/icons/ArrowUp';
import { sanityImageUrl } from '../../../lib/sanity';

const BlogItem = ({ blog }) => {
  const rawDate = blog.publishedAt;
  const date = new Date(rawDate);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return (
    <Link href={`/blog/${blog.slug?.current || blog._id}`} className="block">
      <div
        className="
          group bg-white rounded-xl overflow-hidden
          border borderLight shadow-sm hover:shadow-lg
          transition-all duration-300
        "
      >
        {/* Image + Date Overlay */}
        <div className="relative h-52 sm:h-56 lg:h-64 overflow-hidden rounded-t-xl">
          {blog.image && (
            <Image
              src={sanityImageUrl({
                source: blog.image,
                width: 500,
                height: 350,
              })}
              alt={blog.title}
              fill
              className="
                object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          )}

          {/* FIXED gradient overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-black/50 via-black/10 to-transparent
              transition-all duration-500
            "
          />

          {/* Date badge */}
          <div className="absolute left-4 top-4 text-white drop-shadow-lg">
            <span className="text-3xl font-bold leading-none">{day}</span>
            <br />
            <span className="text-sm opacity-90">
              {month}, {year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-grayDark text-sm mt-2 line-clamp-2">
            {blog.subtitle}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {(blog.keywords?.slice(0, 2) || ['Cars', 'Luxury Cars']).map(
              (tag, index) => (
                <span
                  key={index}
                  className="
                    bg-primary/10 text-primary
                    px-2 py-0.5 rounded-md
                    text-xs font-medium
                  "
                >
                  {tag}
                </span>
              )
            )}

            {blog.keywords?.length > 3 && (
              <span className="text-grayDark text-xs">
                +{blog.keywords.length - 3} more
              </span>
            )}
          </div>

          {/* Button */}
          <Link
            href={`/blog/${blog.slug?.current || blog._id}`}
            className="
              h-10 w-10 sm:h-12 sm:w-12
              mt-5 flex items-center justify-center
              rounded-full border border-primary text-primary
              hover:bg-primary hover:text-white
              transition-all
            "
          >
            <ArrowUp />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
