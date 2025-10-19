import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getBlogBySlug, sanityImageUrl } from '../../../../lib/sanity';
import config from '@/utils/config';

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} | ${config.siteName}`,
    description:
      blog.excerpt ||
      blog.content ||
      `Read ${blog.title} on ${config.siteName}. ${config.description}`,
    keywords: [
      ...(config.keywords || [
        'luxury cars',
        'car rental',
        'cab service',
        'self drive',
        'wedding cars',
      ]),
      blog.title,
      ...(blog.tags || []),
      'blog',
      'car blog',
      'travel blog',
    ],
    authors: [{ name: blog.author || config.siteName }],
    openGraph: {
      title: `${blog.title} | ${config.siteName}`,
      description:
        blog.excerpt ||
        blog.content ||
        `Read ${blog.title} on ${config.siteName}. ${config.description}`,
      type: 'article',
      url: `${config.siteUrl}/blog/${params.slug}`,
      publishedTime: blog.publishedAt,
      authors: [blog.author || config.siteName],
      images:
        blog.featuredImage &&
        sanityImageUrl({
          source: blog.featuredImage,
          width: 1200,
          height: 630,
        })
          ? [
              {
                url: sanityImageUrl({
                  source: blog.featuredImage,
                  width: 1200,
                  height: 630,
                }),
                width: 1200,
                height: 630,
                alt: blog.title,
              },
            ]
          : [
              {
                url: '/logo-small.png',
                width: 1200,
                height: 630,
                alt: blog.title,
              },
            ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blog.title} | ${config.siteName}`,
      description:
        blog.excerpt ||
        blog.content ||
        `Read ${blog.title} on ${config.siteName}. ${config.description}`,
      images:
        blog.featuredImage &&
        sanityImageUrl({
          source: blog.featuredImage,
          width: 1200,
          height: 630,
        })
          ? [
              sanityImageUrl({
                source: blog.featuredImage,
                width: 1200,
                height: 630,
              }),
            ]
          : ['/logo-small.png'],
    },
    alternates: {
      canonical: `${config.siteUrl}/blog/${params.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
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
            {sanityImageUrl({
              source: blog.featuredImage,
              width: 800,
              height: 400,
            }) ? (
              <Image
                src={sanityImageUrl({
                  source: blog.featuredImage,
                  width: 800,
                  height: 400,
                })}
                alt={blog.featuredImage.alt || blog.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>
        )}

        {/* Blog Header */}
        <header className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-600">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            </div>
            {blog.isFeatured && (
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
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
