const path = require("path");

module.exports = {
  siteMetadata: {
    title: "George Song’s Website",
    description: "Musings of a middle-aged developer.",
    author: "@zukefresh",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-theme-ui",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-plugin-exclude",
      options: { paths: ["**/helpers/**"] },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },

    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content`,
      },
    },

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          content: path.resolve("./src/components/Article.js"),
          default: path.resolve("./src/components/Layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: { showLineNumbers: true },
          },
          "gatsby-remark-smartypants",
        ],
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: "./src/styles/typography",
        omitGoogleFont: true,
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "George Song's Site",
        short_name: "gsong.dev",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./src/images/gs-icon.png",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
