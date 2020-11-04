module.exports = {
  siteMetadata: {
    title: `LetsWorship`,
    description: `Sing songs and play them while worshipping`,
    author: `@ashish`,
    siteUrl: `https://letsworship.netlify.app/`,
    keywords: `chords gospel hindi songs guitar`
  },
  
  plugins: [

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-linked-files`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-advanced-sitemap`,
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: "AIzaSyCE1r0H6x5qjbnfdnFjuBD0qugGRPwvaaQ",
    //       authDomain: "letsworship-16f70.firebaseapp.com",
    //       databaseURL: "https://letsworship-16f70.firebaseio.com",
    //       projectId: "letsworship-16f70",
    //       storageBucket: "letsworship-16f70.appspot.com",
    //       messagingSenderId: "335872098592",
    //       appId: "1:335872098592:web:5531690d5ef5d6545fd745",
    //       measurementId: "G-0DVFJZNJB0"
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LetsWorship`,
        short_name: `LetsWorship`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/maskable_logo.png`, // This path is relative to the root of the site.
        purpose: "maskable",

        //this is for firebase cloud messaging
        gcm_sender_id: "103953800507"
      },
    },
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     appendScript: require.resolve(`${__dirname}/src/firebase-messaging-sw.js`),
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-firebase-messaging`,
    //   options: {
    //     //required unless removeFirebaseServiceWorker == true
    //     config: { 
    //       apiKey: 'AIzaSyCE1r0H6x5qjbnfdnFjuBD0qugGRPwvaaQ',
    //       appId: '1:335872098592:web:5531690d5ef5d6545fd745',
    //       messagingSenderId: '335872098592',
    //       projectId: 'letsworship-16f70',
    //     },        
    //   },
    // },

    
    {
      resolve: "gatsby-remark-embed-video",
      options: {
          width: 800,
          ratio: 1.77, 
          height: 400, 
          related: false,
          noIframeBorder: true
      },
    },
    {
      resolve: 'gatsby-remark-audio',
      options: {
        preload: 'auto',
        loop: false,
        controls: true,
        muted: false,
        autoplay: false
      }
    },
    {
      resolve: `gatsby-remark-responsive-iframe`,
      options: {
          wrapperStyle: `margin-bottom: 1.0725rem`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sheets`,
        path: `${__dirname}/content/sheets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `artists`,
        path: `${__dirname}/content/artists`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/content/image`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pads`,
        path: `${__dirname}/content/pads`,
      },
    },
    
    
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`], // highlight-line
      },
    },
    
    

    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            path: node => node.frontmatter.path,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
   
    
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-178217347-1",
      },
    },

    //google fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Sans Condensed`
           
        ],
        display: 'swap'
      }
    }
  ],
}
