import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Title from '@/elements/Title';
import ArrowUp from '../../../public/icons/ArrowUp';
import { getFeaturedBlogs, sanityImageUrl } from '../../../lib/sanity';
import config from '@/utils/config';
import BlogItem from './BlogItem';

const BlogsHome = async () => {
  const blogs = await getFeaturedBlogs(3);
  // console.log('blogs', blogs);
  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <div className="bg-light py-10">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between mb-10">
          <div>
            <Title className="mb-2">Latest Blog Posts</Title>
            <p className="text-gray-600">
              Stay updated with our latest news and insights
            </p>
          </div>
          <Link
            href="/blogs"
            className="flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors group"
          >
            View All
            <ArrowUp className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {blogs.map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsHome;
