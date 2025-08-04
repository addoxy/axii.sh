import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: 'https://www.axii.xyz/',
      lastModified: new Date(),
    },
  ];

  return [...routes];
}
