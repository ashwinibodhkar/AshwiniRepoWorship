
  
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
const _ = require("lodash")

//for lunr search
const { GraphQLJSONObject } = require(`graphql-type-json`)
const striptags = require(`striptags`)
const lunr = require(`lunr`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const ChordTemplate = path.resolve("src/template/chord.js")
  const ArtistTemplate = path.resolve("src/template/artist-template.js")
  const CategoryTemplate = path.resolve("src/template/category-template.js")

  // Individual song pages
  const blogs = graphql(`
    query {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/sheets/*.md" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    // Create song pages
    result.data.blogs.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: ChordTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })

  // Individual artist pages
  const docs = graphql(`
    query {
      docs: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/content/artists/*.md" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    // Create artist pages
    result.data.docs.edges.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: ArtistTemplate,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })

  //creating tags page
  const cat = graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/sheets/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    // Create tag pages
    result.data.tagsGroup.group.forEach(tag => {
      createPage({
        path: `/category/${_.kebabCase(tag.fieldValue)}/`,
        component: CategoryTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  })

  // Return a Promise which would wait for both the queries to resolve
  return Promise.all([blogs, docs, cat])
}


//*for creating client routes
exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions
	// page.matchPath is a special key that's used for matching pages
	// only on the client.
	if (page.path.match(/^\/user/)) {
	  page.matchPath = "/user/*"
	  // Update the page.
	  createPage(page)
	}
}


//for adding lunr search
exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (parent, args, context, info) => {
          const blogNodes = context.nodeModel.getAllNodes({
            type: `MarkdownRemark`,
          })
          const type = info.schema.getType(`MarkdownRemark`)
          return createIndex(blogNodes, type, cache)
        },
      },
    },
  })
}

const createIndex = async (blogNodes, type, cache) => {
  const cacheKey = `IndexLunr`
  const cached = await cache.get(cacheKey)
  if (cached) {
    return cached
  }

  const documents = []
  const store = {}
  for (const node of blogNodes) {
	const { slug } = node.fields
	const id = node.id
    const title = node.frontmatter.title
    const tags = node.frontmatter.tags
    const artist = node.frontmatter.artist
    const [html, excerpt] = await Promise.all([
      type.getFields().html.resolve(node),
      type.getFields().excerpt.resolve(node, { pruneLength: 100 }),
    ])
    documents.push({
	  slug: node.fields.slug,
	  id: node.id,
      title: node.frontmatter.title,
      tags: node.frontmatter.tags,
      artist: node.frontmatter.artist,
      content: striptags(html),
    })
    store[slug] = {
		id,
		title,
		artist,
		excerpt,
		tags,
    }
  }
  const index = lunr(function () {
	this.ref(`slug`)
	this.field(`id`)
    this.field(`title`)
    this.field(`artist`)
    this.field(`tags`)
    this.field("content")
    for (const doc of documents) {
      this.add(doc)
    }
  })
  return { index: index.toJSON(), store }
  await cache.set(cacheKey, json)
  return json
}
exports.onCreateWebpackConfig = ({
  stage,
  actions,
  getConfig
}) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function(context, request, callback) {
        const regex = /^@?firebase(\/(.+))?/;
        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
        if (regex.test(request)) {
          return callback(null, 'umd ' + request);
        }
        callback();
      })
    });
  }
};
