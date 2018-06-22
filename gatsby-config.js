module.exports = {
  siteMetadata: {
    title: 'Help | DAS PDP',
    description: 'Help documentation for the DAS PDP website.',
    keywords: 'help, documentation, docs, das, pdp, rit, daspdp',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '9p8gju2huor1',
        accessToken:
          'afd5b1c26fb70ecab88e6bd37c98de5b819c7f65e4ed303afc2b6444826800c2',
      },
    },
  ],
};
