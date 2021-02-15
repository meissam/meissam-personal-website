require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Meissam | Front-End Software Engineer`,
    siteTitleAlt: `Meissam | Front-End Software Engineer`,
    siteImage:`/logo.png`,
    copyright:`Meissam`,
    siteHeadline:`Meissam | Front-End Software Engineer`,
    siteUrl:`https://www.meissam.net`,
    siteDescription:`A Front-End Software Engineer, AI Enthusiast and Open Source Advocate who is Interested in Art, Culture and Science`,
    author:`Meissam`,
    siteLanguage:`en`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Projects`,
            slug: `/projects`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            icon:`icon-github`,
            url: `https://github.com/meissam`,
          },
          {
            name: `Linkedin`,
            icon:`icon-linkedin`,
            url: `https://www.linkedin.com/in/meissam-rasouli/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-161559702-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meissam | Front-End Software Engineer`,
        short_name: `Meissam | Front-End Software Engineer`,
        description: `A Front-End Software Engineer, AI Enthusiast and Open Source Advocate who is Interested in Art, Culture and Science`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
