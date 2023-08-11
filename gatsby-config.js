/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby POC`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "a70h5thn88lt",
        accessToken: "XyGfLbIDzJ6hzEykhUn_XB8jgbPu33OuxvXTTJdEUfo",
      },
    },
    `gatsby-plugin-image`,
  ],
};
