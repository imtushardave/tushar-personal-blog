module.exports = {
  siteMetadata: {
    title: `Tushar Dave`,
    name: `Tushar Dave`,
    siteUrl: `https://www.tushardave.in`,
    description: `portal for students to find tips and tools to live better life`,
    hero: {
      heading: `Welcome to my place of thoughts, life-lessons and valuable experiences.`,
      maxWidth: 670,
    },
    social: [
      {
        name: `instagram`,
        url: `https://instagram.com/imtushardave`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/imtushardave`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/imtushardave`,
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
