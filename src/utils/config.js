const config = {
  debug: process.env.NODE_ENV === 'development',
  siteName: process.env.NEXT_PUBLIC_ENV_SITE_NAME || 'Cabber',
  siteUrl: process.env.SITE_URL || 'https://cabber.vercel.app',
  description:
    'Welcome to Cabber, your trusted platform for rental, self-drive, and cab booking services. Experience seamless and affordable travel solutions tailored to your needs, anytime, anywhere.',
  projectKey: 'cabbber-0987',
  graphQlUri: '',
  graphQlUriDev: '',
  email: 'cabber@cabbook.com',
  telephone: '+441234567891',
  location: '22 fk11hg',
  twitter: '@cabber',
  address: {
    area: '99, Lamond Crescent',
    postcode: 'EH54 69G',
    locality: 'Boness, Scotland',
    country: 'United Kingdom',
  },
  completeAddress:
    '99, Lamond Crescent, EH54 69G, Boness, Scotland, United Kingdom',
  facebook: 'https://www.facebook.com/@Cabber',
  instagram: 'https://www.instagram.com/@Cabber',
  youtube: 'https://www.youtube.com/@Cabber',
}

export default config
