import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.nuevos-comienzos.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/articles', '/ministries', '/contact', '/mission', '/events/taller-sanidad/sign-up'];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
