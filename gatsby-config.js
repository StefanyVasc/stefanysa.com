const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, ".env") })

const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Stefany Sá`,
    position: `Desenvolvedora Front End`,
    description: `Escrevo sobre front end e o universo JavaScript, vida pessoal e outras coisas legais.`,
    author: `@stefanyvasc`,
    siteUrl: `https://stefanysa.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // permitindo a leitura dos arquivos da pasta img dentro de static
    // precisa ser a primeira para funcionar com o gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },

    // permitindo a leitura dos arquivos da pasta posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          {
            resolve: "gatsby-remark-emoji", // <-- this adds emoji
            options: {
              emojiConversion: "shortnameToUnicode",
              ascii: false,
            },
          },
          // o prismjs deve sempre ir no final
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stefany Sa`,
        short_name: `Stefany Sa`,
        start_url: `/`,
        background_color: `#17bf63`,
        theme_color: `#17bf63`,
        display: `minimal-ui`,
        icon: `static/assets/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
  ],
}
