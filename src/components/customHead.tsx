import { Script } from 'gatsby';
import React from 'react';

const script = `if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}`;

const CustomHead: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <>
      <html lang="es" />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content="/images/ancho-blanco-norte-padding.webp" />
      <meta property="og:title" content="Iglesia del Nazareno - Nuevos Comienzos" />
      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://wwww.nuevos-comienzos.org" />
      <meta property="og:description" content="Iglesia del Nazareno en Barranquilla, Colombia. ¡Ven y visítanos!" />
      <script>{script}</script>
    </>
  );
};

export default CustomHead;
