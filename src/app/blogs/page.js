import Link from 'next/link';
// import { type SanityDocument } from 'next-sanity';
import Image from 'next/image';

import { getAllBlogs } from '../../../lib/sanity';

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
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Link href={`/blog/${blog.slug.current}`} className="block">
              {blog.featuredImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.featuredImage.asset.url}
                    alt={blog.featuredImage.alt || blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">
                    By {blog.author}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-3 line-clamp-3">
                  {blog.excerpt}
                </p>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{blog.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}
                {blog.isFeatured && (
                  <div className="mt-3">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </div>
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
