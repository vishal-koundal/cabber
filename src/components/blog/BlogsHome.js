import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Title from '@/elements/Title';
import ArrowUp from '../../../public/icons/ArrowUp';
import { getFeaturedBlogs, sanityImageUrl } from '../../../lib/sanity';

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
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Link
              href={`/blog/${blog.slug?.current || blog._id}`}
              className="block"
            >
              {blog.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={sanityImageUrl(blog.image)}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                </div>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {blog.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsHome;
