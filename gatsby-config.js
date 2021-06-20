module.exports = {
  siteMetadata: {
    title: `A New York City Diary`,
    name: `A New York City Diary`,
    siteUrl: `https://multibdoyle.com`,
    description: `Food, fashion and funky futuristic flippancy. Mostly food.`,
    hero: {
      heading: `A New York City Diary`,
      maxWidth: 652,
    },
    social: [
 
      {
        name: `github`,
        url: `https://github.com/multibdoyle/`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/multibdoyle/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/brendan-doyle-403ba028/`,
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
        sources: {
          local: true,
          contentful: false
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
        icon: `src/assets/skeleton_praying.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-169387969-1"
      },
    },
  ],
};
