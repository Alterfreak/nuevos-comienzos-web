import type { MetadataRoute } from 'next';
import siteData from '../data/siteData';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteData.name,
    short_name: siteData.shortName,
    description: siteData.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#7ed957',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
