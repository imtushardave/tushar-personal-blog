module.exports = {
  siteMetadata: {
    title: `Tushar Dave`,
    name: `Tushar Dave`,
    siteUrl: `https://www.tushardave.in`,
    description: `platform for student to find tips and tools which can help them in living better life.`,
    hero: {
      heading: `Hey friends, I'm Tushar.On this portal,  I share my thoughts, life lessons, tips and tools to help students live focused and productive life.`,
      maxWidth: 670,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/imtushardave`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/imtushardave`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/imtushardave/`,
      },
    
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
