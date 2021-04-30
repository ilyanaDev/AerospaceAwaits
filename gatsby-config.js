module.exports = {
  pathPrefix: '/gatsby-starter-emulsify-mdx', // for deploying to a folder like on Github pages.
  plugins: [
    {
      resolve: 'gatsby-theme-emulsify',
      options: {
        // Site Metadata for style guide
        siteMetadata: {
          title: 'Aerospace Awaits',
          description: 'Aerospace Awaits is the one-stop-shop for all things aerospace, for the aspiring engineer or casual enthusiast.',
          author: 'Ilyana Smith',
        },
        docPagesPath: 'styleguide', // Where your custom style guide pages live
        componentLibPath: 'components', // Where your component library lives
        UILibPath: 'https://lucid-colden-c2abf5.netlify.com/iframe.html', // Where your Storybook instance lives. Could be remote or local like "/storybook/iframe.html"
        basePath: __dirname, // Needed to make above paths relative to your project
        // designSystems: [
        //   {
        //     name: "Basic", // Other design system you may want to link to in a parent/child situation
        //     link: "/"
        //   },
        // ]
      },
    },
  ],
};
