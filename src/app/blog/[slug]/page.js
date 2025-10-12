import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getBlogBySlug, urlFor } from '../../../../lib/sanity';

export default async function BlogPostPage({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-4xl p-8">
      {/* Back to blogs link */}
      <div className="mb-6">
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blogs
        </Link>
      </div>

      <article className="prose prose-lg max-w-none">
        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={
                urlFor(blog.featuredImage)?.width(800).height(400).url() ||
                blog.featuredImage.asset.url
              }
              alt={blog.featuredImage.alt || blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Blog Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            </div>
            {blog.isFeatured && (
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {blog.excerpt}
            </p>
          )}
        </header>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content && <PortableText value={blog.content} />}
        </div>
      </article>
    </main>
  );
}
