const config = {
  debug: process.env.NODE_ENV === 'development',
  siteName: process.env.NEXT_PUBLIC_ENV_SITE_NAME || 'Luxury Cars Wale',
  siteUrl: process.env.SITE_URL || 'https://luxurycarswale.com',
  owner: 'Kapil Bhatia',
  description:
    'Welcome to Luxury Cars Wale, your trusted platform for rental, self-drive, and cab booking services. Experience seamless and affordable travel solutions tailored to your needs, anytime, anywhere.',
  projectKey: 'luxurycarswale-0987',
  graphQlUri: '',
  graphQlUriDev: '',
  email: 'luxurycarswale@hi.com',
  telephone: '+91-9876543210',
  location: '22 fk11hg',
  twitter: '@luxurycarswale',
  address: {
    area: '99, Lamond Crescent',
    postcode: 'EH54 69G',
    locality: 'Boness, Scotland',
    country: 'India',
  },
  completeAddress:
    '99, Lamond Crescent, EH54 69G, Boness, Scotland, United Kingdom',
  facebook: 'https://www.facebook.com/@Luxurycarswale',
  instagram: 'https://www.instagram.com/@Luxurycarswale',
  youtube: 'https://www.youtube.com/@Luxurycarswale',
  currency: '₹',
};

export default config;
