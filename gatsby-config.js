const path = require("path");

const siteMetadata = {
  title: "George Song’s Website",
  description: "Musings of a middle-aged developer.",
  siteUrl: "https://gsong.dev",
  author: "george@gsong.dev (George Song)",
  twitter: "@zukefresh",
};

module.exports = {
  siteMetadata,

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
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "header-link",
              isIconAfterHeader: true,
            },
          },

          {
            resolve: "gatsby-remark-table-of-contents",
            options: {
              exclude: ["Intermission", "Table of Contents"],
              toHeading: 3,
            },
          },

          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",

          {
            resolve: "gatsby-remark-prismjs",
            options: { showLineNumbers: true },
          },
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

    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                description
                siteUrl
                site_url: siteUrl
                managingEditor: author
                webMaster: author
              }
            }
          }
        `,

        feeds: [makeFeed()],
      },
    },

    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-22541040-3",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};

function makeFeed() {
  const query = `
    {
      allMdx(
        filter: { fileAbsolutePath: { glob: "**/articles/**" } }
        sort: { order: DESC, fields: frontmatter___published }
      ) {
        nodes {
          frontmatter {
            title
            description
            date: published
          }
          html
          slug
        }
      }
    }
  `;

  const serialize = ({
    query: {
      site: {
        siteMetadata: { siteUrl },
      },
      allMdx,
    },
  }) =>
    allMdx.nodes.map(({ frontmatter, html, slug }) => {
      const url = [siteUrl, slug].join("/");

      return {
        ...frontmatter,
        url,
        guid: url,
        custom_elements: [{ "content:encoded": html }],
      };
    });

  const output = "/articles/rss.xml";

  return {
    query,
    serialize,
    output,
    title: "George Song’s Articles",
    copyright: `Copyright ${new Date().getFullYear()}, George Song`,
    language: "en",
    feed_url: siteMetadata.siteUrl + output,
  };
}
