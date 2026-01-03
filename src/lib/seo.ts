import type { Metadata } from 'next';
import siteData from '../data/siteData';

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.nuevos-comienzos.org';

const normalizePath = (path?: string) => {
  if (!path) return '';
  return path.startsWith('/') ? path : `/${path}`;
};

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export const createMetadata = ({ title, description, path, image }: SeoOptions): Metadata => {
  const safePath = normalizePath(path);
  const pageUrl = safePath ? `${appUrl}${safePath}` : appUrl;
  const ogImage = image ?? siteData.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: pageUrl,
      images: [ogImage],
      siteName: siteData.name,
      locale: 'es_CO',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
};
