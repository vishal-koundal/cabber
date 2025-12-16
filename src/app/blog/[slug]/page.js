import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getBlogBySlug, sanityImageUrl } from '../../../../lib/sanity';
import config from '@/utils/config';

/* -------------------- Portable Text Styling -------------------- */
const portableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-600 leading-relaxed mb-5">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-gray-600">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
  },
};

/* -------------------- SEO METADATA -------------------- */
export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const description =
    blog.excerpt ||
    blog.subtitle ||
    `Read ${blog.title} on ${config.siteName}.`;

  return {
    title: `${blog.title} | ${config.siteName}`,
    description,

    keywords: Array.from(
      new Set(
        [
          ...(config?.keywords ?? []),
          ...(blog?.keywords ?? []),
          ...(blog?.tags ?? []),
          blog.title,
          'blog',
          'car blog',
          'travel blog',
        ].filter(Boolean)
      )
    ),

    authors: [{ name: blog.author || config.siteName }],

    openGraph: {
      title: `${blog.title} | ${config.siteName}`,
      description,
      type: 'article',
      url: `${config.siteUrl}/blog/${params.slug}`,
      publishedTime: blog.publishedAt,
      authors: [blog.author || config.siteName],
      images: blog.image
        ? [
            {
              url: sanityImageUrl({
                source: blog.image,
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
      description,
      images: blog.image
        ? [
            sanityImageUrl({
              source: blog.image,
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

/* -------------------- PAGE -------------------- */
export default async function BlogPostPage({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen max-w-4xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Back Link */}
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

      <article className="max-w-none">
        {/* Featured Image */}
        {blog.image && (
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={sanityImageUrl({
                source: blog.image,
                width: 1200,
                height: 600,
              })}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
            <span>By {blog.author || config.siteName}</span>
            <span>•</span>
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            {blog.isFeatured && (
              <>
                <span>•</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-medium">
                  Featured
                </span>
              </>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="text-lg text-gray-500 leading-relaxed">
              {blog.excerpt}
            </p>
          )}
        </header>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        {blog.details && (
          <PortableText
            value={blog.details}
            components={portableTextComponents}
          />
        )}
      </article>
    </main>
  );
}
