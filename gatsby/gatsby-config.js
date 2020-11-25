/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby Internet Shoppe`,
    siteUrl: `https://gatsby-internet-shoppe.co`,
    description: `A gatsby e-shoppe`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:300,400,400i,700`
        ]
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ubmjcxaf`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true
      }
    }
  ],
}
