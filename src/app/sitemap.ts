import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.addoxy.me/',
      lastModified: new Date(),
    },
  ];
}
