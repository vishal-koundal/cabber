import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Required for write operations
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

// Booking queries and mutations
export async function createBooking(bookingData) {
  try {
    const bookingId = `BK-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 5)
      .toUpperCase()}`;

    const booking = {
      _type: 'booking',
      bookingId,
      bookingType: bookingData.bookingType,
      status: 'pending',
      customerDetails: {
        name: bookingData.customerDetails.name,
        email: bookingData.customerDetails.email,
        mobile: bookingData.customerDetails.mobile,
        message: bookingData.customerDetails.message || '',
      },
      tripDetails: {
        pickupLocation: bookingData.tripDetails.pickupLocation || '',
        dropLocation: bookingData.tripDetails.dropLocation || '',
        tripType: bookingData.tripDetails.tripType || '',
        daysRequired: bookingData.tripDetails.daysRequired || 1,
        startDate: bookingData.tripDetails.startDate || '',
        endDate: bookingData.tripDetails.endDate || '',
      },
      carDetails: {
        name: 'BMW 7 Series Sedan',
        seats: 4,
        fuelType: 'Petrol',
        category: 'Luxury',
      },
      pricing: {
        baseFare: 450,
        deliveryPickup: 100,
        insuranceGst: 80,
        total: 630,
        currency: '₹',
      },
      telegramSent: false,
    };

    const result = await client.create(booking);
    return { success: true, bookingId, documentId: result._id };
  } catch (error) {
    console.error('Error creating booking in Sanity:', error);
    return { success: false, error: error.message };
  }
}

export async function getAllBookings() {
  return await client.fetch(`
    *[_type == "booking"] | order(_createdAt desc) {
      _id,
      bookingId,
      bookingType,
      status,
      customerDetails {
        name,
        email,
        mobile
      },
      tripDetails,
      carDetails,
      pricing,
      telegramSent,
      _createdAt
    }
  `);
}

export async function getBookingById(bookingId) {
  return await client.fetch(
    `*[_type == "booking" && bookingId == $bookingId][0]`,
    { bookingId }
  );
}

export async function updateBookingStatus(bookingId, status, notes = '') {
  try {
    const booking = await getBookingById(bookingId);
    if (!booking) {
      return { success: false, error: 'Booking not found' };
    }

    const updateData = { status };
    if (notes) {
      updateData.notes = notes;
    }

    const result = await client.patch(booking._id).set(updateData).commit();

    return { success: true, booking: result };
  } catch (error) {
    console.error('Error updating booking status:', error);
    return { success: false, error: error.message };
  }
}

export async function updateBookingTelegramStatus(
  bookingId,
  telegramMessageId
) {
  try {
    const booking = await getBookingById(bookingId);
    if (!booking) {
      return { success: false, error: 'Booking not found' };
    }

    const result = await client
      .patch(booking._id)
      .set({
        telegramSent: true,
        telegramMessageId,
      })
      .commit();

    return { success: true, booking: result };
  } catch (error) {
    console.error('Error updating booking telegram status:', error);
    return { success: false, error: error.message };
  }
}

// Contact form queries and mutations
export async function createContact(contactData) {
  try {
    const contactId = `CT-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 5)
      .toUpperCase()}`;

    const contact = {
      _type: 'contact',
      contactId,
      name: contactData.name,
      email: contactData.email,
      telephone: contactData.telephone,
      subject: contactData.subject,
      message: contactData.message,
      status: 'new',
      telegramSent: false,
      _createdAt: new Date().toISOString(),
    };

    const result = await client.create(contact);
    return { success: true, contactId, documentId: result._id };
  } catch (error) {
    console.error('Error creating contact in Sanity:', error);
    return { success: false, error: error.message };
  }
}

export async function getAllContacts() {
  return await client.fetch(`
    *[_type == "contact"] | order(_createdAt desc) {
      _id,
      contactId,
      name,
      email,
      telephone,
      subject,
      message,
      status,
      telegramSent,
      _createdAt
    }
  `);
}

export async function getContactById(contactId) {
  return await client.fetch(
    `*[_type == "contact" && contactId == $contactId][0]`,
    { contactId }
  );
}

export async function updateContactStatus(contactId, status, notes = '') {
  try {
    const contact = await getContactById(contactId);
    if (!contact) {
      return { success: false, error: 'Contact not found' };
    }

    const updateData = { status };
    if (notes) {
      updateData.notes = notes;
    }

    const result = await client.patch(contact._id).set(updateData).commit();

    return { success: true, contact: result };
  } catch (error) {
    console.error('Error updating contact status:', error);
    return { success: false, error: error.message };
  }
}

export async function updateContactTelegramStatus(
  contactId,
  telegramMessageId
) {
  try {
    const contact = await getContactById(contactId);
    if (!contact) {
      return { success: false, error: 'Contact not found' };
    }

    const result = await client
      .patch(contact._id)
      .set({
        telegramSent: true,
        telegramMessageId,
      })
      .commit();

    return { success: true, contact: result };
  } catch (error) {
    console.error('Error updating contact telegram status:', error);
    return { success: false, error: error.message };
  }
}
