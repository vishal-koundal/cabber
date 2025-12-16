import ContactDetails from '@/components/contact/ContactDetails';
import Faq from '@/components/faq/Faq';
import Hero from '@/components/about/Hero';
import PageHeader from '@/components/shared/PageHeader';
import config from '@/utils/config';
import React from 'react';
import { getSiteSettings } from '../../../lib/sanity';

export async function generateMetadata() {
  const settings = await getSiteSettings();

  return {
    title: `About Us | ${settings?.name || config.siteName}`,
    description: `Learn more about ${settings?.name || config.siteName}. ${
      settings?.description || config.description
    }`,
    keywords: [
      ...(settings?.keywords || [
        'luxury cars',
        'car rental',
        'cab service',
        'self drive',
        'wedding cars',
      ]),
      'about us',
      'company info',
    ],
    openGraph: {
      title: `About Us | ${settings?.name || config.siteName}`,
      description: `Learn more about ${settings?.name || config.siteName}. ${
        settings?.description || config.description
      }`,
      type: 'website',
      url: `${config.siteUrl}/about`,
      images: [
        {
          url: '/logo-small.png',
          width: 1200,
          height: 630,
          alt: `About ${settings?.name || config.siteName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `About Us | ${settings?.name || config.siteName}`,
      description: `Learn more about ${settings?.name || config.siteName}. ${
        settings?.description || config.description
      }`,
      images: ['/logo-small.png'],
    },
    alternates: {
      canonical: `${config.siteUrl}/about`,
    },
  };
}

const page = async () => {
  const settings = await getSiteSettings();
  // console.log('settings', settings);
  return (
    <main className="min-h-screen">
      <PageHeader title="About" subtitle="About Us" />
      <Hero settings={settings} />
      <ContactDetails settings={settings} />
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.5533995757773!2d75.55977341130355!3d31.371301074175282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a50688098af35%3A0x2ded7355b88d02f3!2sAshok%20Vihar%2C%20BABA%20MOHAN%20DASS%20MARKET%2C%20Salempur%20Rd%2C%20near%20Baba%20Mohan%20Dass%20Mandir%2C%20Ashok%20Vihar%20Colony%2C%20Salempur%2C%20Jalandhar%2C%20Punjab%20144008!5e0!3m2!1sen!2sin!4v1765915350434!5m2!1sen!2sin"
          alt="none"
          className="w-full h-64 sm:h-80 md:h-[500px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
          <p>{settings?.name || config.siteName}</p>
        </iframe>
      </div>
      <Faq settings={settings} />
    </main>
  );
};

export default page;
