import config from '@/utils/config';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/api/'],
    },
    sitemap: `${config.siteUrl}/sitemap.xml`,
  };
}
