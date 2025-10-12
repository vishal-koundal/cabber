import config from '@/utils/config';
import { getAllCars, getAllBlogs } from '../../lib/sanity';

export default async function sitemap() {
  const baseUrl = config.siteUrl;

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cars`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic car pages
  const cars = await getAllCars();
  const carPages = cars.map((car) => ({
    url: `${baseUrl}/car/${car.slug.current}`,
    lastModified: new Date(car._createdAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic blog pages
  const blogs = await getAllBlogs();
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug.current}`,
    lastModified: new Date(blog.publishedAt || blog._createdAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...carPages, ...blogPages];
}
