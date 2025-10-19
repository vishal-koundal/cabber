import BlogsList from '@/components/blog/BlogsList';
import PageHeader from '@/components/shared/PageHeader';
import React from 'react';
import { getAllBlogs } from '../../../lib/sanity';

const page = async () => {
  const blogs = await getAllBlogs();
  console.log('blogs', blogs);
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Blogs"
        subtitle="Stay updated with our latest news and insights about car rentals and
          travel tips."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <BlogsList blogs={blogs} />
        {blogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts available at the moment.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
