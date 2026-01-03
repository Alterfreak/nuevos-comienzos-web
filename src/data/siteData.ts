const siteData = {
  name: 'Iglesia del Nazareno - Nuevos Comienzos',
  shortName: 'Nuevos Comienzos',
  description: 'Iglesia del Nazareno en Barranquilla, Colombia.',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.nuevos-comienzos.org',
  phone: '+57 324 315 8514',
  whatsappNumber: '573243158514',
  whatsappMessage: '¡Hola Iglesia del Nazareno! Deseo saber más de la iglesia.',
  address: {
    streetAddress: 'Cl. 80#41d-09, Ciudad Jardín',
    addressLocality: 'Barranquilla',
    addressRegion: 'Atlántico',
    addressCountry: 'CO',
  },
  mapsUrl: 'https://maps.app.goo.gl/QJ5H4mhPW2CcGBm19',
  social: {
    facebook: 'https://www.facebook.com/nazbaqnorte',
    instagram: 'https://instagram.com/nazbaqnorte',
  },
  logo: '/images/logo-black-dove.png',
  ogImage: '/images/ancho-oscuro-norte-padding.webp',
};

export const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
  siteData.whatsappMessage,
)}`;

export default siteData;
