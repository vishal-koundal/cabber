import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import config from '@/utils/config';
import { getSiteSettings, sanityImageUrl } from '../../lib/sanity';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  const settings = await getSiteSettings();

  return {
    title: {
      default: settings?.name || config.siteName,
      template: `%s | ${settings?.name || config.siteName}`,
    },
    description: settings?.description || config.description,
    keywords: settings?.keywords ||
      config.keywords || [
        'luxury cars',
        'car rental',
        'cab service',
        'self drive',
      ],
    authors: [{ name: settings?.name || config.siteName }],
    creator: settings?.name || config.siteName,
    publisher: settings?.name || config.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(config.siteUrl),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: config.siteUrl,
      title: settings?.name || config.siteName,
      description: settings?.description || config.description,
      siteName: settings?.name || config.siteName,
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-small.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo-small.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo-small.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {settings?.contactInfo?.mobile && (
          <meta name="contact" content={settings.contactInfo.mobile} />
        )}
        {settings?.contactInfo?.email && (
          <meta name="email" content={settings.contactInfo.email} />
        )}
        {settings?.contactInfo?.address && (
          <meta name="address" content={settings.contactInfo.address} />
        )}
      </head>
      <body className={inter.className}>
        <Header settings={settings} />
        {children}
        <Footer settings={settings} />
      </body>
    </html>
  );
}
