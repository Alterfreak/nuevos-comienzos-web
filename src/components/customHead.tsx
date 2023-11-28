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
      <script>{script}</script>
    </>
  );
};

export default CustomHead;
