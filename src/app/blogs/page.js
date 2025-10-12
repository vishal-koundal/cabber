import Link from 'next/link';
// import { type SanityDocument } from 'next-sanity';
import Image from 'next/image';

import { getAllBlogs } from '../../../lib/sanity';
import BlogItem from '@/components/blog/BlogItem';

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <main className="container mx-auto min-h-screen max-w-6xl p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
        <p className="text-gray-600 text-lg">
          Stay updated with our latest news and insights about car rentals and
          travel tips.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No blog posts available at the moment.
          </p>
        </div>
      )}
    </main>
  );
}
