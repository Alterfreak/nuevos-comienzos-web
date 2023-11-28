import type { GatsbyConfig } from "gatsby";
import netlifyAdapter from 'gatsby-adapter-netlify';

const config: GatsbyConfig = {
  adapter: netlifyAdapter(),
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: `IdN - Nuevos Comienzos`,
    siteUrl: `https://www.nuevos-comienzos.org/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    "gatsby-plugin-decap-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.webp",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.nuevos-comienzos.org',
        sitemap: 'https://www.nuevos-comienzos.org/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-QELM61VTQR", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
  ],
};

export default config;
