var plugins = [{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/node_modules/gatsby-plugin-preload-fonts/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/node_modules/gatsby-plugin-advanced-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"TuneWorship","short_name":"TuneWorship","start_url":"/","background_color":"#000","theme_color":"#000","display":"minimal-ui","icon":"src/images/logo11.png","purpose":"maskable","gcm_sender_id":"103953800507","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"60482c1c2ffbe7223f8e7894f85ce161"},
    },{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".md",".mdx"]},
    },{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-178217347-1"},
    },{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["Fira Sans Condensed","Bowlby One SC","Rancho","Yesteryear","Denk One","Fruktur","Zhi Mang Xing","Bree Serif","Caveat","Carter One","Archivo Black","Bangers"],"display":"swap"},
    },{
      plugin: require('C:/Users/ashwi/Desktop/AshwiniRepoWorship/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
