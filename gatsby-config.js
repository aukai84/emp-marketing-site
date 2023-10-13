module.exports = {
  siteMetadata: {
    title: `Electric Motor Performance Hawaii`,
    siteUrl: `https://emp-hi.com`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Electric Motor Performance Hawaii`,
        short_name: `Hawaii`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.webp',
      },
    },
  ],
};
