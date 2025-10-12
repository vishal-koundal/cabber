import BlogsList from '@/components/blog/BlogsList';
import PageHeader from '@/components/shared/PageHeader';
import React from 'react';
import { getAllBlogs } from '../../../lib/sanity';

const page = async () => {
  const blogs = await getAllBlogs();
  console.log('blogs', blogs);
  return (
    <main className="">
      <PageHeader
        title="Blogs"
        subtitle="Stay updated with our latest news and insights about car rentals and
          travel tips."
      />

      <BlogsList blogs={blogs} />
      {blogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No blog posts available at the moment.
          </p>
        </div>
      )}
    </main>
  );
};

export default page;
