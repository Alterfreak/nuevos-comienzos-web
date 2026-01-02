import type { Metadata } from 'next';
import Script from 'next/script';
import StyledComponentsRegistry from '../lib/styled-components-registry';
import pageData from '../data/pageData';
import '../styles/font.css';
import '../styles/global.css';
import '../styles/slick.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-QELM61VTQR';
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.nuevos-comienzos.org';

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: pageData.index.title,
  description: pageData.index.description,
  openGraph: {
    type: 'website',
    title: 'Iglesia del Nazareno - Nuevos Comienzos',
    description: 'Iglesia del Nazareno en Barranquilla, Colombia. ¡Ven y visítanos!',
    url: appUrl,
    images: ['/images/ancho-oscuro-norte-padding.webp'],
  },
  icons: {
    icon: '/icon.webp',
  },
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
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
