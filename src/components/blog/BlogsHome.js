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
    <div className="container mx-auto py-20 bg-light md:px-8 px-4 rounded-xl mb-16">
      <div className="flex items-center justify-between mb-10">
        <Title className="mb-6">Latest Blog Posts</Title>
        <Link href="/blogs" className="flex items-center font-light text-brand">
          View All <ArrowUp />
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {blogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsHome;
