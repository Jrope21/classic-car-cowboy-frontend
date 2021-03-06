module.exports = {
  siteMetadata: {
    title: `Practicing WordPress with Gatsby son`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Joshua Roper`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // { // Currently not using graphql (may add back if I want to use a static query)
    //   resolve: `gatsby-source-wordpress`, 
    //   options: {
    //     excludedRoutes: [`/wp/v2/users/**`, '/wp/v2/settings*', '/acf/**'],
    //     baseUrl: 'createboldly.net',
    //     protocol: 'https',
    //     hostingWPCOM: false,
    //     useACF: true,
    //     searchAndReplaceContentUrls: {
    //       sourceUrl: `https://createboldy.net`,
    //       replacementUrl: ``,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
