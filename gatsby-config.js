require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Gatsby WordPress V4 alpha Will it Build Benchmark`,
  },
  plugins: [
    `gatsby-plugin-benchmark-reporting`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          process.env.WPGRAPHQL_URL,
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ?
                  50
                :
                  false,
          },
        },
      },
    },
  ],
}
