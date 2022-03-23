
module.exports = {

	siteMetadata: {
		title: `TuneWorship`,
		description: `Play and store your favourite hindi gospel songs with original chords.`,
		author: `@ashish`,
		siteUrl: `https://www.tuneworship.com`,
		keywords: `chords, gospel, hindi, songs, guitar`,
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
		{
			resolve: "gatsby-plugin-firebase",
			options: {
				credentials: {
					apiKey: "AIzaSyCbG2nf8lzMhvPY0TJvai8dbDL2Pw3fmUY",
					authDomain: "tuneworship-24780.firebaseapp.com",
					projectId: "tuneworship-24780",
					storageBucket: "tuneworship-24780.appspot.com",
					messagingSenderId: "626920758483",
					appId: "1:626920758483:web:9b0def810f991d70468826",
					measurementId: "G-LZWJNRW5SV",
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `TuneWorship`,
				short_name: `TuneWorship`,
				start_url: `/`,
				background_color: `#000`,
				theme_color: `#000`,
				display: `standalone`,
				icon: `src/images/maskable_logo.png`, // This path is relative to the root of the site.
				purpose: "maskable",

				//this is for firebase cloud messaging
				//gcm_sender_id: "103953800507",
			},
		},
		`gatsby-plugin-offline`,

		{
			resolve: "gatsby-remark-embed-video",
			options: {
				width: 800,
				ratio: 1.77,
				height: 400,
				related: false,
				noIframeBorder: true,
			},
		},
		{
			resolve: "gatsby-remark-audio",
			options: {
				preload: "auto",
				loop: false,
				controls: true,
				muted: false,
				autoplay: false,
			},
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
				// id from tuneworship
				trackingId: "UA-186360937-1",
			},
		},

		//google fonts
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Fira Sans Condensed`,
					`Bowlby One SC`,
					`Rancho`,
					`Yesteryear`,
					`Denk One`,
					`Fruktur`,
					`Zhi Mang Xing`,
					`Bree Serif`,
					`Caveat`,
					`Carter One`,
					`Archivo Black`,
					`Bangers`,
				],
				display: "swap",
			},
		},


		
	],


	
}

exports.onCreateWebpackConfig = ({
	actions,
  }) => {
	const { setWebpackConfig } = actions;
	setWebpackConfig({
	  externals: {
		jquery: 'jQuery', // important: 'Q' capitalized
	  }
	})
  }