import type { Metadata } from 'next';
import Script from 'next/script';
import { Suspense } from 'react';
import StyledComponentsRegistry from '../lib/styled-components-registry';
import pageData from '../data/pageData';
import siteData from '../data/siteData';
import Analytics from '../components/analytics';
import '../styles/font.css';
import '../styles/global.css';
import '../styles/slick.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-QELM61VTQR';
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.nuevos-comienzos.org';

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: pageData.index.title,
  description: pageData.index.description,
  manifest: '/manifest.webmanifest',
  themeColor: '#7ed957',
  openGraph: {
    type: 'website',
    title: siteData.name,
    description: siteData.description,
    url: appUrl,
    images: [siteData.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.name,
    description: siteData.description,
    images: [siteData.ogImage],
  },
  icons: {
    icon: '/icon.webp',
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: siteData.name,
  url: appUrl,
  description: siteData.description,
  telephone: siteData.phone,
  image: [new URL(siteData.ogImage, appUrl).toString()],
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteData.address.streetAddress,
    addressLocality: siteData.address.addressLocality,
    addressRegion: siteData.address.addressRegion,
    addressCountry: siteData.address.addressCountry,
  },
  sameAs: [siteData.social.facebook, siteData.social.instagram],
  logo: new URL(siteData.logo, appUrl).toString(),
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
        </Script>
      </body>
    </html>
  );
};

export default RootLayout;
