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

  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-4">
          <div>
            <Title className="mb-2">Latest Blog Posts</Title>
            <p className="text-sm sm:text-base text-grayDark mt-1">
              Stay updated with our latest news and insights
            </p>
          </div>

          <Link
            href="/blogs"
            className="flex items-center font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            View All
            <ArrowUp className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsHome;
