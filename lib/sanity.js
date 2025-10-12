import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'c4b8gl55',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Image URL builder
const { projectId, dataset } = client.config();
export const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const sanityImageUrl = ({ source, height = 300, width = 550 }) => {
  if (!source || !source.asset) {
    return null;
  }
  try {
    return urlFor(source).width(width).height(height).url();
  } catch (error) {
    console.warn('Error generating image URL:', error);
    return null;
  }
};

// Car queries
export async function getAllCars() {
  const res = await client.fetch(`
    *[_type == "car"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      seats,
      basePrice,
      description,
      category,
      fuelType,
      fuelType,
      featureImage,
      _createdAt
    }
  `);
  // console.log('res', res);
  return res;
}

export async function getCarBySlug(slug) {
  return await client.fetch(
    `
    *[_type == "car" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      basePrice,
      description,
      images,
      category,
      availability,
      seats,
      transmission,
      fuelType,
      carDetails,
      _createdAt
    }
  `,
    { slug }
  );
}

export async function getFeaturedCars() {
  const res = await client.fetch(`
    *[_type == "car" && isFeatured == true] | order(_createdAt desc) {
      _id,
      name,
      slug,
      seats,
      basePrice,
      description,
      category,
      fuelType,
      fuelType,
      featureImage,
      _createdAt
    }
  `);
  // console.log('res', res);
  return res;
}

// Blog queries
export async function getAllBlogs() {
  return await client.fetch(`
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      subtitle,
      author,
      publishedAt,
      image,
      keywords,
      details,
      _createdAt
    }
  `);
}

export async function getBlogBySlug(slug) {
  return await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      author,
      publishedAt,
      featuredImage,
      tags,
      isFeatured,
      _createdAt
    }
  `,
    { slug }
  );
}

export async function getFeaturedBlogs(limit = 3) {
  return await client.fetch(`
    *[_type == "blog" && isFeatured == true] | order(publishedAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      subtitle,
      author,
      publishedAt,
      image,
      keywords,
      _createdAt
    }
  `);
}

// Category queries
export async function getAllCategories() {
  return await client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      icon
    }
  `);
}

// Feature queries
export async function getAllFeatures() {
  return await client.fetch(`
    *[_type == "feature"] | order(title asc) {
      _id,
      title,
      description,
      icon
    }
  `);
}

export async function getAllServices() {
  return await client.fetch(`
    *[_type == "service"] {
      _id,
      title,
      description,
      featureImage,
      slug
    }
  `);
}

// Site Settings queries
export async function getSiteSettings() {
  return await client.fetch(`
    *[_type == "siteSettings"][0] {
      _id,
      name,
      description,
      keywords,
      contactInfo {
        address,
        email,
        mobile
      },
      socialLinks {
        facebook,
        instagram,
        youtube
      },
      homeHero {
        title,
        description,
        featureImage,
        redirect
      },
      faqs[] {
        _key,
        question,
        answer
      },
      reviews[] {
        _key,
        name,
        rating,
        review
      }
    }
  `);
}
