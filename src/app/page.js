import CarsHome from '@/components/cars/CarsHome';
import Hero from '@/components/home/Hero';
import Steps from '@/components/home/Steps';
import Services from '@/components/our-services/Services';
import Reviews from '@/components/reviews/Reviews';
import BlogsHome from '@/components/blog/BlogsHome';
import PageHeader from '@/components/shared/PageHeader';
import { getSiteSettings, sanityImageUrl } from '../../lib/sanity';
import { client } from '../../lib/sanity';
import config from '@/utils/config';

export async function generateMetadata() {
  const settings = await getSiteSettings();

  return {
    title: settings?.name || config.siteName,
    description: settings?.description || config.description,
    keywords: settings?.keywords || [
      'luxury cars',
      'car rental',
      'cab service',
      'self drive',
      'wedding cars',
    ],
    openGraph: {
      title: settings?.name || config.siteName,
      description: settings?.description || config.description,
      type: 'website',
      url: config.siteUrl,
      images:
        settings?.homeHero?.featureImage &&
        sanityImageUrl({
          source: settings.homeHero.featureImage,
          width: 1200,
          height: 630,
        })
          ? [
              {
                url: sanityImageUrl({
                  source: settings.homeHero.featureImage,
                  width: 1200,
                  height: 630,
                }),
                width: 1200,
                height: 630,
                alt: settings?.name || config.siteName,
              },
            ]
          : [
              {
                url: '/logo-small.png',
                width: 1200,
                height: 630,
                alt: settings?.name || config.siteName,
              },
            ],
    },
    twitter: {
      card: 'summary_large_image',
      title: settings?.name || config.siteName,
      description: settings?.description || config.description,
      images:
        settings?.homeHero?.featureImage &&
        sanityImageUrl({
          source: settings.homeHero.featureImage,
          width: 1200,
          height: 630,
        })
          ? [
              sanityImageUrl({
                source: settings.homeHero.featureImage,
                width: 1200,
                height: 630,
              }),
            ]
          : ['/logo-small.png'],
    },
    alternates: {
      canonical: config.siteUrl,
    },
  };
}

export default async function Home() {
  const settings = await getSiteSettings();
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Hero settings={settings} />
      <Steps />
      <Services />
      <CarsHome />
      <Reviews settings={settings} />

      <BlogsHome />
    </main>
  );
}
