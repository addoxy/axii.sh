import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.axii.xyz/sitemap.xml',
    host: 'https://www.axii.xyz',
  };
}
