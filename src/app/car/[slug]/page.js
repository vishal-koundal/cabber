// import { type SanityDocument } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getCarBySlug, sanityImageUrl } from '../../../../lib/sanity';
import config from '@/utils/config';
import CarDetails from '@/components/cars/CarDetails';

export async function generateMetadata({ params }) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    return {
      title: 'Car Not Found',
      description: 'The requested car could not be found.',
    };
  }

  return {
    title: `${car.name} | ${config.siteName}`,
    description:
      car.description ||
      `Book ${car.name} for your next trip. ${config.description}`,
    keywords: [
      ...(config.keywords || [
        'luxury cars',
        'car rental',
        'cab service',
        'self drive',
        'wedding cars',
      ]),
      car.title,
      car.category?.name || 'luxury car',
      'car booking',
      'rent a car',
    ],
    openGraph: {
      title: `${car.name} | ${config.siteName}`,
      description:
        car.description ||
        `Book ${car.name} for your next trip. ${config.description}`,
      type: 'website',
      url: `${config.siteUrl}/car/${params.slug}`,
      images:
        car.images &&
        car.images.length > 0 &&
        sanityImageUrl({
          source: car.images[0],
          width: 1200,
          height: 630,
        })
          ? [
              {
                url: sanityImageUrl({
                  source: car.images[0],
                  width: 1200,
                  height: 630,
                }),
                width: 1200,
                height: 630,
                alt: car.title,
              },
            ]
          : [
              {
                url: '/logo-small.png',
                width: 1200,
                height: 630,
                alt: car.title,
              },
            ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${car.name} | ${config.siteName}`,
      description:
        car.description ||
        `Book ${car.name} for your next trip. ${config.description}`,
      images: car.featureImage
        ? [
            sanityImageUrl({
              source: car.featureImage,
              width: 1200,
              height: 630,
            }),
          ]
        : ['/logo-small.png'],
    },
    alternates: {
      canonical: `${config.siteUrl}/car/${params.slug}`,
    },
  };
}

export default async function CarPage({ params }) {
  const car = await getCarBySlug(params.slug);
  // console.log('car', car);
  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <CarDetails car={car} />
    </main>
  );
}
